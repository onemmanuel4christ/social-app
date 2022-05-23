import "./Login.css"
import { useContext, useRef } from 'react'
import { loginCall } from "../apiCalls"
import  {AuthContext} from "../../context/AuthContext"
export default function Login() {

    const email = useRef()
    const password = useRef()
    const {user, isFetching, error, dispatch} = useContext(AuthContext)
    const handleClick = (e) => {
    e.preventDefault()
    loginCall({email: email.current.value, password: password.current.value},)
    }
console.log(user)
  return (
    <div className="login">
        <div className="login__wrapper">
        <div className="login__left">
            <h3 className="login__logo">Kachisoicial</h3>
            <span className="login__desc">
                Connect with friends and the world around you on Kachisocial...
            </span>
        </div>
        <div className="login__right"></div>
            <form className="login__box" onSubmit={handleClick}>
                <input 
                    placeholder="Email" 
                    type="email" 
                    className="login__input" 
                    ref={email} 
                    required
                    minLength={6}
                />
                <input 
                    placeholder="Password" 
                    type="password" 
                    className="login__input" 
                    ref={password}
                    required
                />
                <button className="login__button">Log in</button>
                <span className="login__forgot">Forgot password</span><button className="login__registeration">Create a new account</button>
            </form>
        </div>
    </div>
  )
}
