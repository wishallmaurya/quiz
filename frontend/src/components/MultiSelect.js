import React from 'react'
import { Multiselect } from 'multiselect-react-dropdown'

function MultiSelect({ label, onSelect, required, value, checkbox , data = [], selectedOption = []}) {
    // const data = [
    //     { Country: "India", id: 1 },
    //     { Country: "America", id: 2 },
    //     { Country: "France", id: 3 },
    //     { Country: "Germany", id: 4 },
    // ]
    return (
        <div>
           {label && <label className='block text-gray-700 text-sm font-bold mb-2'>
                {label}{required && <span className="text-red-500">&nbsp;*</span>}
           </label>}
            <Multiselect
                className="shadow appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                options={data}
                displayValue="Country"
                showCheckbox ={checkbox ? true: false}
                required ={required ? true : false}
                style={{
                    searchBox:{
                        paddingLeft:"12px",
                        paddingRight:"12px"
                    }
                }}
                onSelect ={(e)=> onSelect(e)}
                value={value}
                selectedValues={selectedOption}
                avoidHighlightFirstOption
            />
        </div>
    )
}

export default MultiSelect