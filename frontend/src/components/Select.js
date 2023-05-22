
import React from 'react'

function Select({ label, required, placeholder, id,value ,onChange, data = [], defaultValue = '', disabled = false}) {
    return (
        <div>
            {label && <label className="block text-gray-700 text-sm font-bold mb-2" for={id}>
                {label}{required && <span className="text-red-500">&nbsp;*</span>}
            </label>}
            <div className="relative">
                <select   
                    className=" bg-[#F7F8FA] xshadow appearance-none border rounded w-full py-2 px-3 text-black-500 leading-tight focus:outline-none focus:shadow-outline" 
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    onChange={(e) => onChange(e.target.value)}
                    >
                         <option value=''>Choose a {label.toLowerCase()}</option>
                        {
                            data.map((item, index) => (
                                <option value={item.value} key={index}>{item.label}</option>
                            ))
                        }
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
        </div>
    )
}

export default Select