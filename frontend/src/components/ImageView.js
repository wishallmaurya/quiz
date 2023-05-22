import React from 'react'
import { IoCloseOutline } from 'react-icons/io5';

function ImageView(props) {
    const { open, size = 'medium', imageUrl = '' } = props
    const handleOnClose = (e) => {
        if (e.target.id === "modal") props.onClose()
    }
    const handleClose = () => {
        props.onClose()
    }
    if (!open.action) return null; 
  return (
      <div
          id='modal'
          onClick={handleOnClose}
          className="fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-[2px] flex items-center justify-center ">
          <div className={`${size === 'medium' ? 'w-2/4' : (size === 'large' ? 'w-3/4': 'w-1/4')}  bg-white mt-10 rounded-lg shadow-2l pb-2 max-h-screen fit-content overflow-x-hidden overflow-y-auto`}>
              <div className='p-5 border-b border-#6c6c6c-500  m-b-2 flex justify-between'>
                  <h1 style={{ fontWeight: 700 }}>{props.title}</h1>
                  <button onClick={handleClose}>
                      <IoCloseOutline />
                  </button>
              </div>
              {console.log('Image URL', imageUrl)}
              <image src={imageUrl.toString()} style={{width :  500, height : 200}} />
          </div>
      </div>
  )
}

export default ImageView