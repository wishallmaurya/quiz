import React from 'react'
import DataTable from 'react-data-table-component'
import "./style.css"

function Table({ columns, data, page = true }) {
    const customStyles = {
        rows: {
            style: {
                fontWeight: '500',
                // zIndex:' 0 !important'
                display:'flex',
                flexWrap:'wrap',
                
            }
        },
        headCells: {
            style: {
                fontWeight: "600",
                
            },

      
        }
        
       
       
        
    };
    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
                pagination={page}
                striped
                fixedHeader
                fixedHeaderScrollHeight='430px'
                selectableRowsHighlight
                customStyles={customStyles}
              
            />
        </div>

    )
}

export default Table