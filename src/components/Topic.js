import React, { useState } from 'react'
import * as firebase from 'firebase'
import NextRevision from './revisionbadges/NextRevision'
import LastRevision from './revisionbadges/LastRevision'
import NumberOfRevisions from './revisionbadges/NumberOfRevisions'

export default ({ doc }) => {
  let path = doc.ref.path
  let { title, numberOfRevisions, lastRevision } = doc.data()

  const [titleValue, setTitle] = useState(title)
  const [isEditing, setIsEditing] = useState(false)

  const _deleteMe = () => {
    firebase.firestore().doc(path).delete()
  }

  const _setDone = () => {
    firebase.firestore().doc(path).update({
      numberOfRevisions: numberOfRevisions + 1,
      lastRevision: new Date()
    })
  }

  const _updateTitle = () => {
    firebase.firestore().doc(path).update({
      title: titleValue
    }).then(() => { setIsEditing(false) })
  }

  return (
    <div className="list-group-item px-2 py-3">
      <div className="row w-100 mx-0">
        <div className="col-md-3 d-flex align-items-center">
          {
            // Turn into an input on click
            isEditing
            ? <div className="input-group mb-3">
                <input
                  id="newtopic"
                  type="text"
                  className="form-control"
                  value={titleValue}
                  onChange={e => setTitle(e.target.value) } />
                <div className="input-group-append">
                  <button onClick={_updateTitle} className="btn btn-primary" type="button">
                    <i className="fas fa-save"></i>
                  </button>
                </div>
              </div>
            : <strong class="underline-on-hover" onClick={e => setIsEditing(true)}>
                {title}
                <i className="ml-2 fas fa-edit"></i>
              </strong>
          }
        
        </div>
        <div className="col-md-6">
          <NumberOfRevisions numberOfRevisions={numberOfRevisions} />
          <LastRevision lastRevision={lastRevision} />
          <NextRevision lastRevision={lastRevision} numberOfRevisions={numberOfRevisions} />
        </div>
        <div className="col-md-3 text-right p-0">
          <div className="btn-group" role="group">
            <button onClick={_setDone} className="btn btn-light">
                <i className="fas fa-check text-success"></i></button>
            <button onClick={_deleteMe} className="btn btn-light">
              <i className="fas fa-trash text-danger"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}