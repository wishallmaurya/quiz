import React from 'react'

function ChooseFile({label , required , id, onChange}) {
    return (
        <div>
            {label && <label className="block text-gray-700 text-sm font-bold mb-2" for={id}>
                {label}{required && <span className="text-red-500">&nbsp;*</span>}
            </label>}
            <input
                className="
                              shadow 
                              file:px-6
                              file:mr-4
                              file:py-2
                              file:border-none
                              appearance-none border rounded w-full  pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                aria-describedby="user_avatar_help"
                id={id}
                type="file" 
                onChange={onChange}
                />
        </div>
    )
}

export default ChooseFile