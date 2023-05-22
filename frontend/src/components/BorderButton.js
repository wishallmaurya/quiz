import './style.css'
export default function BorderButton(props){
    const {title, bgColor = 'bg-blue-700', bgColorHover = 'hover:bg-blue-800', size ='py-1 px-6' ,color="text-white", border="circular-border"} = props
     
    return(
        <button className={`text-sm rounded-3xl ${size} ${bgColor} ${bgColorHover} ${color} ${border}`}>
           {title}
        </button>
    )
}