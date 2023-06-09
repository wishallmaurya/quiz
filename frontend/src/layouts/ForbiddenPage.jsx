import React from 'react'
import { Link } from 'react-router-dom'

const ForbiddenPage = () => {
  return (
    <><main className="h-screen w-full flex flex-col justify-center items-center bg-[#152C4F]">
    <h1 className="text-9xl font-extrabold text-white tracking-widest">403</h1>
    <div className="bg-[#152C4F] text-white px-2 text-sm rounded rotate-12 absolute">
      Forbidden
    </div>
    <button className="mt-5">
      <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-white group-hover:translate-y-0 group-hover:translate-x-0" />
        <span className="relative block px-8 py-3 bg-white text-[#152C4F] border border-current">
          <Link to="/">Go Home</Link>
        </span>
      </div>
    </button>
  </main>
  </>
  )
}

export default ForbiddenPage