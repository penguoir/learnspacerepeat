import React from 'react'
import * as moment from 'moment'
import * as firebase from 'firebase'

export default class TopicCard extends React.Component {
  _setDone = () => {
    firebase.firestore().doc(this.props.path).update({
      numberOfRevisions: this.props.numberOfRevisions + 1,
      lastRevision: new Date()
    })
  }

  render() {
    let { title, numberOfRevisions, lastRevision, daysToNextRevision } = this.props
    return (
      <div className="col-12 col-md-3">
        <div className="card shadow">
          <div className="card-header">
            { title }
          </div>
          <div className="card-body">
            Revised { numberOfRevisions } times. <br />
            Last revision was { moment(lastRevision.toDate()).fromNow() } <br />

            <button onClick={this._setDone} class="btn btn-primary float-right">Done</button>
          </div>
        </div>
      </div>
    )
  }
}