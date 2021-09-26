import {Link} from 'react-router-dom'

function SignInButton(){
    return (
        <Link to="/signin">
        <button className="signInButton">SignUp</button>
        </Link>

    )
}

export default SignInButton