import { SocialIcon } from 'react-social-icons';
import {FiUsers, FiSettings } from 'react-icons/fi'

export default function Card_Tele(props){
    const { title, Icon,Count, Progress } = props;
    return(
        <div className="bg-white w-1/4  drop-shadow-lg text-center p-4 rounded-lg center mx-2">
            <div className='flex'>
            <div className='flex flex-col py-5 '>
             {Icon}   
            </div>
            <div className='flex flex-col py-5 ml-7 items-center'>
            <div className='text-base'>{title }</div>
            <h4 style={{ color: "#0E9D6A", fontSize: "18px", fontWeight: "600",marginTop:"10px" }}>{Count}</h4>
            </div>
            </div>

        </div>
    )
}