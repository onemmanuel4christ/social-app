import "./Profile.css"
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'


export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Topbar />
      <div className='profile'>
          <Sidebar />
          <div className="profile__right">
              <div className="profile__rightTop">
                <div className="profile__cover">
                  <img className="profile__coverImage" src={`${PF}post/3.jpeg`} alt="" />
                  <img className="profile__userImage" src={`${PF}person/7.jpeg `}alt="" />
                </div>
                <div className="profile__info">
                  <h4 className="profile__infoName">John Doe</h4>
                  <span className="profile__infoDesc">Hello, my friends</span>
                </div>
              </div>
              <div className="profile__rightBottom">
                <Feed />
                <Rightbar profile />
              </div>
          </div>
      </div>
    </>
  )
}
