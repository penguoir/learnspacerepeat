import * as moment from 'moment'

/**
  * @param {Integer} lastRevision
  * @param {Integer} numberOfRevisions
  * @param {Boolean} isReturnNumber should return the number of days to next revision? (default returns date)
  * 
  * @returns {Integer} The number of days untill the next revision, 0 or negative if today or overdue.
*/
export default function calculateNextRevision(lastRevision, numberOfRevisions, isReturnNumber) {
  let now = new Date()
  let milliInDay = 1000 * 60 * 60 * 24
  let daysSinceLastRevision = Math.round( ( now.getTime() - lastRevision.getTime() ) / milliInDay )
  
  const ratio = 2
  const first_term = 1

  let daysToNextRevision = ( first_term * ratio ) ** ( numberOfRevisions ) - daysSinceLastRevision - 1

  // Maximum is two months
  if (daysToNextRevision > 60) {
    daysToNextRevision = 60
  }

  if (isReturnNumber) {
    return daysToNextRevision
  }

  return moment(now).add(daysToNextRevision, 'days')
}