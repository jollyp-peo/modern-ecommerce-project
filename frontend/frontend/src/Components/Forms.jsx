import React from 'react'
import { useState } from 'react'

const Forms = () => {
  return (
    <div className='text-center mt-10'>
    <form className='' >
    <input className='' type="text" name="name" placeholder="Full Name" required />
    <input className='' type="email" name="email" placeholder="Email" required />
    <input className='' type="password" name="password" placeholder="Password" required />
    <button className='' type="submit">Register</button>
    </form>
    </div>

  )
}

export default Forms
