import React from 'react'
import calculateNextRevision from '../../helpers/calculateNextRevision'
import calendar from './calendar'

export default ({ lastRevision, numberOfRevisions }) => {
  return (
    <div className="badge badge-secondary mr-2">
      next revision is { calculateNextRevision(lastRevision.toDate(), numberOfRevisions).calendar(null, calendar) }
    </div>
  )
}