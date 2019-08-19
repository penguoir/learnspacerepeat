import React from 'react'
import { shallow } from 'enzyme'
import NumberOfRevisions from './NumberOfRevisions'

const text = 'revision number 0'

it('displays revision number', () => {
  const numberOfRevisions = shallow(<NumberOfRevisions numberOfRevisions={0} />)
  expect(numberOfRevisions).toHaveText(text)
})