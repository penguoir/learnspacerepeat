import React from 'react'

export default ({ numberOfRevisions }) => {
  const _getColour = numberOfRevisions => {
    if (numberOfRevisions > 5)
      return '#43a047'

    switch (numberOfRevisions) {
      case 0:
        return '#b71c1c' // dark red
      case 1:
        return '#f44336' // red
      case 2:
        return '#fb8c00' // orange
      case 3:
        return '#ffb300' // light orange
      case 3:
        return '#fbc02d' // yellow
      case 4:
        return '#afb42b' // yellow green
      case 5:
        return '#43a047' // green
      default:
        return ''
    }
  }

  return (
    <div style={{backgroundColor: _getColour(numberOfRevisions)}} className="badge badge-secondary mr-2">
      revision number {numberOfRevisions}
    </div>
  )
}