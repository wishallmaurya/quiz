import React from 'react'

function Input({ label, id, placeholder, type, required, errorMessage , value , onChange, disabled = false}) {
    return (
        <div>
            {label && <label className="block text-gray-700 text-sm font-bold mb-2" for={id}>
                {label}{required && <span className="text-red-500">&nbsp;*</span>}
            </label>}
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={id}
                type={type}
                required={required ? true : false}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onChange={(e) => type == 'file' ? onChange(e.target.files[0]) : onChange(e.target.value)}
            />
            {errorMessage && <p className="text-sm text-red-500 ">{errorMessage}</p>}
            {/* <select className=" appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
            </select> */}
        </div>
    )
}

export default Input