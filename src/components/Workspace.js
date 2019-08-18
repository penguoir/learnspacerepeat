import React, { useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import * as firebase from 'firebase'
import initFirebase from '../helpers/firebaseInit'
import TopicCard from './TopicCard';
import TopicItem from './TopicItem';
import calculateNextRevision from '../helpers/calculateNextRevision';

export default ({ id }) => {
  initFirebase()

  const [topic, setTopic] = useState('')

  const [value, loading, error] = useCollection(
    firebase.firestore().collection(id)
  )

  const _addNewTopic = event => {
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

      <div className="row">
        { value && (
          value.docs.map(doc => {
            let daysToNextRevision =
              calculateNextRevision(doc.data().lastRevision.toDate(), doc.data().numberOfRevisions, true)
            
            console.log({daysToNextRevision})

            if (daysToNextRevision <= 0) {
              return <TopicCard daysToNextRevision={daysToNextRevision} path={doc.ref.path} key={doc.id} id={doc.id} {...doc.data()} />
            } else {
              return ''
            }
          })
        ) }
      </div>

      <h2 className="h5 mt-5 mb-3 text-gray-800">All Topics</h2>

      <div class="input-group mb-3">
        <input
          id="newtopic"
          type="text"
          class="form-control"
          placeholder="New Topic Name"
          value={topic}
          onChange={e => setTopic(e.target.value)} />
        <div class="input-group-append">
          <button onClick={_addNewTopic} class="btn btn-primary" type="button">Add Topic</button>
        </div>
      </div>

      <div className="list-group">
        { value && (
          value.docs.map(doc => (
            <TopicItem key={doc.id} path={doc.ref.path} {...doc.data()} />
          ))
        )}
      </div>
    </div>
  )
}