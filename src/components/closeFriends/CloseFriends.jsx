import "./CloseFriends.css"

export default function CloseFriends({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="sidebar__friend">
        <img className="sidebar__friendImage" src={PF+user.profilePicture} alt="" />
        <span className="sidebar__friendName">{user.username}</span>
    </li>
  )
}
 