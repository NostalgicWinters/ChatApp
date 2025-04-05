import React from 'react'
import Card from './Card'

function Groups() {
  return (
    <div className='bg-dark rounded-2xl p-3 m-2'>
        <h1 className='text-white text-3xl m-2'>Groups</h1>
        <Card username='Group 1' />
        <Card username='Group 2' />
    </div>
  )
}

export default Groups