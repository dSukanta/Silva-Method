import React from 'react'
import ResourcesSingle from './ResourcesSingle'

function Resources() {
  return (
    <div className='mt-3'>
        <p style={{fontSize:"1.2rem"}} className='white-color'>Meditations</p>
        <ResourcesSingle />
        <ResourcesSingle />
        <ResourcesSingle />
        <ResourcesSingle />
        <ResourcesSingle />
        <ResourcesSingle />
    </div>
  )
}

export default Resources