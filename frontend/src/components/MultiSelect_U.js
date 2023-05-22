import React from 'react'
import { Multiselect } from 'multiselect-react-dropdown'

function MultiSelect({label ,options, onSelect , value}) {
    const data = [
        { role: options[0], id: 1 },
        { role: options[1], id: 2 },
       
    ]
    
    return (
        <div>
           {label && <label className='block text-gray-700  text-sm font-bold mb-2'>{label}</label>}
            <Multiselect
                className="shadow appearance-none w-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                options={data}
                displayValue="role"
                style={{
                    searchBox:{
                        paddingLeft:"10px",
                        paddingRight:"10px",
                        width: '50%',
                        
                    }
                }}
                onSelect ={(e)=> onSelect(e)}
                value={value}
                avoidHighlightFirstOption
            />
        </div>
    )
}

export default MultiSelect