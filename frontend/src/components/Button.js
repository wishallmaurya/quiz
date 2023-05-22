import { MdEdit } from 'react-icons/md'
import './style.css'
export default function Button(props){
    const {title, bgColor = 'bg-[#3D5890]', size ='py-2 px-10', shadow='drop-shadow-lg', type = 'button'} = props
     
    return(
        <button className={`text-white text-sm rounded ${size} ${bgColor} ${shadow}`} type={type}>
        {title}
        </button>
    )
}