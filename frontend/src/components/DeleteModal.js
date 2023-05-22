import React,{useState, useEffect} from 'react';
import Modal from "react-responsive-modal";
import CircularButton from '../components/CircularButton'

const DeleteModal = (props) => {
    const {open, onClose, onClick, title} = props
    return(
        <div className='relative'>
            <Modal 
            open={open} 
            onClose={onClose}
            title={`Delete ${title}`}
            size="small"
            >
                <div className='py-5 px-5'>
                    <h3>Do you want to delete this {title}</h3>
                    <div className='pt-4 text-center space-x-5'>
                    <CircularButton title="Delete" bgColor={'btn-bg-red'} bgColorHover={''} onClick={() => onClick()} /> 
                    <CircularButton title="Cancel" bgColor={'btn-bg-gray'} bgColorHover={''} onClick={onClose} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default DeleteModal;
