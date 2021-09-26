import {AuthContext} from '../../Context/AuthContext'
import { useContext } from 'react'

function ContentSquares(props){

    const authCtx = useContext(AuthContext)

    return (
        <div className="userContent">
            <img src={props.imgData} alt="Trying to load content"></img>
            <p>{`'${props.name}' by ${props.email}`}</p>
            <p>{`Created on: ${props.date}`}</p>
            <button
                className="logOutBtn" 
                onClick={() => props.deleteItem(props.identifier)}
                style={{display: authCtx.currentUser.email === props.email ? "block" : "none"}}
                >Delete</button>
        </div>
    )
}

export default ContentSquares