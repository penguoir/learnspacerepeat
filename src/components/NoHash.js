import React from 'react'
import generateId from '../helpers/generateId'

export default () => (
  <div className='container mt-5 p-3'>
    <h1 className="h3 mb-3">Learn Space Repeat</h1>
    <div>
      <div className='alert alert-danger'>
        You are not in your workspace.
      </div>
    </div>
    <p>
      Since I couldn't be bothered to set up users, each workspace is in a specific hash. This means that in order to access your workspace, type in the browser's url thingy '#' and then whatever you want. Remember what you typed, though. Whenever you want to access your  workspace, just go to the same url. I'd recommend bookamarking it in your browser Warning: this means that people can access each-other's workspaces if they guess the tag, so keep it long. I will implement some security later on, if there is enough of a need for this, right now it's just a quick thingy for myself.
      <br /><br />
      Note: you may need to refresh your browser after clicking the button below.
    </p>

    <a className='btn btn-primary' href={'#' + generateId()}>Go To A New Workspace</a>
  </div>
)