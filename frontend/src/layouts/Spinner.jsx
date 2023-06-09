import React from 'react'

const Spinner = () => {
  return (
    <>
<div className="flex items-center justify-center min-h-screen p-5 min-w-screen">
  <div className="flex space-x-2 animate-pulse">
    <div className="w-3 h-3 bg-blue-700 rounded-full" />
    <div className="w-3 h-3 bg-blue-500 rounded-full" />
    <div className="w-3 h-3 bg-blue-300 rounded-full" />
  </div>
</div>
</>
  )
}

export default Spinner