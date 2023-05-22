import React from 'react'

function TextArea({ label, id, placeholder, required, errorMessage , value , onChange, disabled = false}) {
    return (
        <div>
            {label && <label className="block text-gray-700 text-sm font-bold mb-2" for={id}>
                {label}{required && <span className="text-red-500">&nbsp;*</span>}
            </label>}
            <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={id}
                required={required ? true : false}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {errorMessage && <p className="text-sm text-red-500 ">{errorMessage}</p>}
        </div>
    )
}

export default TextArea