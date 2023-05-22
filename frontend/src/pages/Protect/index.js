// import './style.css'
import { MdLock } from 'react-icons/md'

export default function Protect(){
    return(
        <div   style={{margin: 'auto',width: '50%',padding: '10px', marginTop : '10%'}}>
            <div><MdLock  size={50}/> Protected Page</div>
            <div class="message">
                <h1>Access to this page is restricted</h1>
                <p>Please check with the site admin if you believe this is a mistake.</p>
            </div>
        </div>
    )
}