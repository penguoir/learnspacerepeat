import React from 'react'
import { shallow } from 'enzyme'
import LastRevision from './LastRevision'

const text = 'last revision was today'

it('displays last revision', () => {
  const testLastRevision = {
    toDate() {
      return new Date()
    }
  }

  const lastRevision = shallow(<LastRevision lastRevision={testLastRevision} />)
  expect(lastRevision).toHaveText(text)
})