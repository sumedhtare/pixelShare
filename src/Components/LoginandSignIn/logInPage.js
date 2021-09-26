import { useRef, useContext, useState } from "react"
import {AuthContext} from '../../Context/AuthContext'
import {Link, useHistory} from 'react-router-dom'

function LogInPage(){

    const authCtx = useContext(AuthContext)

    const emailRef = useRef()
    const passwordRef = useRef()

    const [error, setError] = useState("") 
    const [loading, setLoading] = useState(false)
    const history = useHistory()



    async function onSubmitHandler(e){
        e.preventDefault()
        
        try {
            setError("")
            setLoading(true)
            await authCtx.logIn(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError("Failed to Log In")
        }
        setLoading(false)
        
    }


    async function onTestLoginHandler(e){
        e.preventDefault()
        
        try {
            setError("")
            setLoading(true)
            await authCtx.logIn('test@pixels.com', "test12345")
            history.push('/')
        } catch {
            setError("Failed to Log In")
        }
        setLoading(false)
        
    }



    //style={{display: authCtx.currentUser.email? 'none' : 'block'}}
    return (
        <div >
            <Link to="/">
            <button className="backBtn" style={{marginTop: "20px"}}>Back</button>
            </Link>
            <h2 className="signinTitle">Log In</h2>
            {authCtx.currentUser && authCtx.currentUser.email}
            <h2>Log in to view user content</h2>
            <button className="logInButton" onClick={onTestLoginHandler}>Use Guest Account</button>
            <h3>{error}</h3>
            <form className="signinForm" onSubmit={onSubmitHandler}>
                <div>
                    <label>Email: </label>
                    <input type="text" ref={emailRef} required></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" ref={passwordRef} required></input>
                </div>
                <div>
                    <button disabled={loading} className="signInFormBtn" type="submit">Log In</button>
                </div>
            </form>

            <h3>Don't have an account? 
                <Link to="/signin">
                    <button className="logInFormBtn">Sign Up</button>
                </Link>
            </h3>
        </div>
    ) 
}

export default LogInPage