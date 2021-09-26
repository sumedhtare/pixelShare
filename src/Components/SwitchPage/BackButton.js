import {Link} from 'react-router-dom'

function BackButton(){
    return (
        <div style={{marginTop: "20px"}}>
            <Link to="/">
                <button className="backBtn">Back to Content Creation</button>
            </Link>
        </div>
    )
}

export default BackButton