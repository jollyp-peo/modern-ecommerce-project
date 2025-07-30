import React from 'react'

const Forms = () => {
  return (
  <div className="flex justify-center items-center h-screen bg-green-100">
    <form className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4">
    <input type="text" name="Name" placeholder="Full Name" required className="px-4 py-2 border border-green-300 rounded-md"
    />
      <input type="email" name="Email" placeholder="Email" required className="w-full sm:flex-1 outline-none py-4"
    />
      <input type="tel" name="phone" placeholder="Phone" required className="px-4 py-2 border border-green-300 rounded-md"
    />
    <input type="submit" value="Submit"
      className="bg-green-700 hover:bg-green-500 active:bg-green-900 rounded text-white text-xs px-10 py-6" />
    </form>
  </div>


  )
}

export default Forms
