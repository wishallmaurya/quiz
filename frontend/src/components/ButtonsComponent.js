import './style.css'
export default function Button(props){
    const {title, bgColor = 'bg-white-700', bgColorHover = 'hover:bg-[#0E9D6A]', size ='py-2.5 px-5 mr-2 mb-2 ', onClick, active = true} = props
     
   
    return(
        // <button 
        //     className={`text-white text-base rounded-3xl ${size} ${bgColor} ${bgColorHover}`} 
        //     onClick={() => onClick()}>
        //    {title}
        // </button>

        // <button  className={`text-white text-base rounded-3xl ${size} ${bgColor} ${bgColorHover}`} 
        //     onClick={() => onClick()}>{title}</button>
     
        <>
        {
            active ?
                <button  className={`py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${size} ${bgColor} `}
            onClick={() => onClick()}>{title}</button>
            :

            <button  className={`py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${size} ${bgColor} `}
            onClick={() => onClick()}>{title}</button>
        }
        </>
    )
}