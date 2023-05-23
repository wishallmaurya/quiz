import React from 'react'
import Menu from './Menu'

const ChangePassword = () => {
  return (
    <>     <div className="bg-[#152C4F] h-44 w-full   mb-5  "></div>
    <div className="flex">
        <div className="flex-col">
          <Menu/>
        </div>
      <form>
        <div className="grid gap-6 w-80 relative left-2/4">
          <div>
            <label className="block mb-2 text-sm font-medium text-black ">
              Old Password
            </label>
            <input
              type="text"
              id="first_name"
              className=" bg-white-50 border border-gray-300 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-black ">
              New Password
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-white-50 border border-gray-300 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-black ">
              Confirm Password
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-white-50 border border-gray-300 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div className="relative left-2/4">
          <button class="bg-white hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-60">
            Save Changes
          </button>
          <button class="bg-white hover:bg-[#3D5890] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-60 mx-8">
            Cancel
          </button>
        </div>
      </form>
      </div>
    </>
  )
}

export default ChangePassword