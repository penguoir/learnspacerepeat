import React from 'react'
import NoHash from './components/NoHash'
import Workspace from './components/Workspace';
import getId from './helpers/getId'

export default () => {
  return getId()
    ? <Workspace id={getId()} />
    : <NoHash />
}