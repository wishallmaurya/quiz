import React from 'react'

const ProfileInfo = () => {
  return (
    <>
      
<form>
  <div className="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-black ">First name</label>
      <input type="text" id="first_name" className="bg-white-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
    </div>
    <div>
      <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-black ">Last name</label>
      <input type="text" id="last_name" className="bg-white-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
    </div>
<div className="mb-6">
<label htmlFor="last_name" className="block mb-2 text-sm font-medium text-black ">Last name</label>
  <input type="text" id="large-input" className="bg-white-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
</div>
<div className="mb-6">
<label htmlFor="last_name" className="block mb-2 text-sm font-medium text-black ">Last name</label>
  <input type="text" id="large-input" className="bg-white-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
</div>



  </div>



</form>

 

    </>
  )
}

export default ProfileInfo