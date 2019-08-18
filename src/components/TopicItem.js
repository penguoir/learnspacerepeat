import React from 'react'
import * as firebase from 'firebase'
import * as moment from 'moment'
import calculateNextRevision from '../helpers/calculateNextRevision'

export default class TopicItem extends React.Component {
  _deleteMe = () => {
    firebase.firestore().doc(this.props.path).delete()
  }

  _setDone = () => {
    firebase.firestore().doc(this.props.path).update({
      numberOfRevisions: this.props.numberOfRevisions + 1,
      lastRevision: new Date()
    })
  }

  render() {
    let { title, lastRevision, numberOfRevisions } = this.props
    return (
      <div className="list-group-item d-md-flex justify-content-between align-items-center">
        <div>
          <p className="mb-2 font-weight-bold">{title}</p>
          <p className="mb-0">
            Last revision {moment(lastRevision.toDate()).fromNow()} <br />
            Number of revisions: {numberOfRevisions} <br />
            Next revision {calculateNextRevision(lastRevision.toDate(), numberOfRevisions).fromNow()}
          </p>
        </div>
        <div className="btn-group" role="group">
          <button onClick={this._deleteMe} className="btn btn-light">
            <i className="fas fa-trash"></i></button>
          <button onClick={this._setDone} className="btn btn-light">
            <i className="fas fa-check"></i></button>
        </div>
      </div>
    )
  }
}