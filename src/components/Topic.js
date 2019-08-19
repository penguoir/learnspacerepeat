import React from 'react'
import * as firebase from 'firebase'
import NextRevision from './revisionbadges/NextRevision'
import LastRevision from './revisionbadges/LastRevision'
import NumberOfRevisions from './revisionbadges/NumberOfRevisions'

export default ({ doc }) => {
  let path = doc.ref.path
  let { title, numberOfRevisions, lastRevision } = doc.data()

  const _deleteMe = () => {
    firebase.firestore().doc(path).delete()
  }

  const _setDone = () => {
    firebase.firestore().doc(path).update({
      numberOfRevisions: numberOfRevisions + 1,
      lastRevision: new Date()
    })
  }

  return (
    <div className="list-group-item px-2 py-3">
      <div className="row w-100 mx-0">
        <div className="col-md-3 d-flex align-items-center">
          <div>
            <p className="mb-0 font-weight-bold">{title}</p>
          </div>
        </div>
        <div className="col-md-6">
          {/* Badges */}
          <NumberOfRevisions numberOfRevisions={numberOfRevisions} />
          <LastRevision lastRevision={lastRevision} />
          <NextRevision lastRevision={lastRevision} numberOfRevisions={numberOfRevisions} />
        </div>
        <div className="col-md-3 text-right p-0">
          <div className="btn-group" role="group">
            <button onClick={_setDone} className="btn btn-light">
                <i className="fas fa-check"></i></button>
            <button onClick={_deleteMe} className="btn btn-light">
              <i className="fas fa-trash"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}