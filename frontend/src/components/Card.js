import { SocialIcon } from 'react-social-icons';
// import {FiUser, FiSettings } from 'react-icons/fi'

export default function Card(props){
    const { title, Icon,Count, Progress } = props;
    return(
        <div className="bg-white w-1/4  drop-shadow-lg text-center p-4 rounded-lg center mx-2">
            <div className='flex justify-center'>
            <div className='flex flex-col py-5 '>
            <SocialIcon url={`https://${Icon}.com/jaketrent`} style={{ width: "30px", height: "30px" }} />
            </div>
            <div className='flex flex-col py-5 ml-7 items-center'>
            <div className='text-base'>{title }</div>
            <h4 style={{ color: "#0E9D6A", fontSize: "18px", fontWeight: "600" }}>{Count}</h4>
            <div>
            {/* <SocialIcon url={`https://${Icon}.com/jaketrent`} style={{ width: "30px", height: "30px" }} />  */}
            </div>
            </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-1.5 rounded-full" style={{width: `${Progress}%` }}></div>
            </div>
        </div>
    )
}