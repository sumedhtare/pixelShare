
import { Link } from 'react-router-dom'


function CheckUserContent(){

    return (
        <div className="galleryBtnContainer">
        <Link to="/usercontent">
        <button className="checkContent">View Gallery</button>
        </Link>
        </div> 
    )
    
}

export default CheckUserContent