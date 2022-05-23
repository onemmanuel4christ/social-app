import "./Register.css"

export default function Register() {
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
            <div className="login__box">
                <input placeholder="Username" className="login__input" />
                <input placeholder="Email" className="login__input" />
                <input placeholder="Password" className="login__input" />
                <input placeholder="Confirm password" className="login__input" />
                <button className="login__button">Sign Up</button>
                <button className="login__registeration">Log in</button>
            </div>
        </div>
    </div>
  )
}
