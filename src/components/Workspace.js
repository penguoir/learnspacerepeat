import React, { useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import firebase from '../helpers/firebaseInit'
import Topic from './Topic';
import calculateNextRevision from '../helpers/calculateNextRevision';

export default ({ id }) => {

  // Topic form handler
  const [topic, setTopic] = useState('')

  // Sort form handler
  const [sort, setSort] = useState('title')

  const [value, loading, error] = useCollection(
    firebase.firestore().collection(id)
  )

  const _addNewTopic = () => {
    firebase.firestore().collection(id).add({
      title: topic,
      numberOfRevisions: 0,
      lastRevision: new Date()
    })
  }

  return (
    <div className="container mt-5">
      <h1 className="h3 mb-5 text-gray-800">Workspace</h1>

      <h2 className="h5 mb-3 text-gray-800">Today</h2>
      { loading && 'Loading...' }
      { error && 'There\'s been an error. Dont\'t worry, I\'ll look into it. In the meantime, try going to a new workspace.'}

      <div className="list-group">
        { value && (
          value.docs.map(doc => {
            let daysToNextRevision =
              calculateNextRevision(doc.data().lastRevision.toDate(), doc.data().numberOfRevisions, true)

            if (daysToNextRevision < 1) {
              return <Topic key={doc.id} doc={doc} />
            }
          })
        ) }
      </div>

      <h2 className="h5 mt-5 mb-3 text-gray-800">All Topics</h2>

      {/* Add topic input */}
      <div className="input-group mb-3">
        <input
          id="newtopic"
          type="text"
          className="form-control"
          placeholder="New Topic Name"
          value={topic}
          onChange={e => setTopic(e.target.value)} />
        <div className="input-group-append">
          <button onClick={_addNewTopic} className="btn btn-primary" type="button">Add Topic</button>
        </div>
      </div>

      {/* Sort input */}
      <div className="form-group mb-3">
        <label htmlFor="sort">Sort</label>
        <select value={sort} onChange={e => setSort(e.target.value)} className="form-control" id="sort">
          <option value="title">Alphabetically</option>
          <option value="numberOfRevisions">Number of revisions</option>
          <option value="lastRevision">Last revision</option>
          <option value="nextRevision">Next revision</option>
        </select>
      </div>

      <div className="list-group">
        { value && (
          value.docs.sort((a, b) => {
            if (sort === 'nextRevision') {
              let aNextRevision = calculateNextRevision(a.data()['lastRevision'].toDate(), a.data()['numberOfRevisions'], true)
              let bNextRevision = calculateNextRevision(b.data()['lastRevision'].toDate(), b.data()['numberOfRevisions'], true)

              if ( aNextRevision < bNextRevision ) return -1
              if ( aNextRevision > bNextRevision ) return 1
              return 0
            }

            if ( a.data()[sort] < b.data()[sort] ) return -1
            if ( a.data()[sort] > b.data()[sort] ) return 1
            return 0
          }).map(doc => (
            <Topic key={doc.id} doc={doc} />
          ))
        )}
      </div>
    </div>
  )
}