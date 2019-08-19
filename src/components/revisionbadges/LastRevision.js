import React from 'react'
import moment from 'moment'
import calendar from './calendar'

export default ({ lastRevision }) => {
  return (
    <div className="badge badge-secondary mr-2">
      last revision was { moment(lastRevision.toDate()).calendar(null, calendar) }
    </div>
  )
}