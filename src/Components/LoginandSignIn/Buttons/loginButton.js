import {Link} from 'react-router-dom'


function LogInButton(){
    return (
        <Link to="/login">
        <button className="logInButton">Log In</button>
        </Link>
    )
}

export default LogInButton