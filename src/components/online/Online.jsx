import "./Online.css"

export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbar__friend">
    <div className="rightbar__ProfileImageContainer">
      <img className="rightbar__profileImage" src={PF+user.profilePicture} alt="" />
      <span className="rightbar__online"></span>
    </div>
    <span className="rightbar__username">{user.username}</span>
  </li>
  )
}
