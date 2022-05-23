import "./Topbar.css"
import { Chat, Notifications, Person, Search } from "@material-ui/icons"
import { Link } from "react-router-dom"


export default function Topbar() {
  return (
    <div className="topbar__container">
         <div className="topbar__left">
           <Link to="/" className="link">
             <span className="logo">Kachisocial</span>
           </Link>
          </div>   

         <div className="topbar__center">
           <div className="searchbar">
              <Search className="search" />
              <input placeholder="Search for friends, post or videos" className="searchInput" />
           </div>
          </div>   
         <div className="topbar__right">
            <div className="topbar__links">
                  <span className="topbar__link">Homepage</span>
                  <span className="topbar__link">Timeline</span>
            </div>
            <div className="topbarIcons">
              <div className="topbarIconItem">
                <Person />
                <span className="topbarBadge">1</span>
              </div>
              <div className="topbarIconItem">
                <Chat />
                <span className="topbarBadge">4</span>
              </div>
              <div className="topbarIconItem">
                <Notifications />
                <span className="topbarBadge">18</span>
              </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
          </div>   
    </div>
  )
}
