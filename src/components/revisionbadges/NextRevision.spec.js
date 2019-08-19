import React from 'react'
import { shallow } from 'enzyme'
import NextRevision from './NextRevision'

const text = 'next revision is today'

it('displays next revision', () => {
  const testNextRevision = {
    toDate() {
      return new Date()
    }
  }

  const nextRevision = shallow(<NextRevision lastRevision={testNextRevision} numberOfRevisions={0} />)
  expect(nextRevision).toHaveText(text)
})