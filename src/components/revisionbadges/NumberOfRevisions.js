import React from 'react'

export default ({ numberOfRevisions }) => {
  const _getColour = numberOfRevisions => {
    switch (numberOfRevisions) {
      case 0:
        return '#b71c1c' // dark red
      case 1:
        return '#f44336' // red
      case 2:
        return '#fb8c00' // orange
      case 3:
        return '#ffb300' // orange-yellow
      case 3:
        return '#fbc02d' // yellow
      case 4:
        return '#afb42b' // yellow-green
      default:
        return '#43a047' // green
    }
  }

  return (
    <div style={{backgroundColor: _getColour(numberOfRevisions)}} className="badge badge-secondary mr-2">
      revision number {numberOfRevisions}
    </div>
  )
}