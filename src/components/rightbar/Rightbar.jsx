import "./Rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () =>{
    return(
      <>
       <div className="birthdayContainer">
            <img className="birthdayImg" src="/assets/gift.png" alt="" />
            <span className="birtday__text">
              <b>Agu Maxwell</b> and <b>4 others</b> have birtday today.</span>
          </div>
          <img className="rightbar__ad" src="/assets/ad.png" alt="" />
          <h4 className="rightbar__title">Online Friends</h4>
          <ul className="rightbar__friendlist">
           {Users.map(u =>(
             <Online key={u.id} user={u}/>
           ))}
          </ul>
      </>
    );
  };
  
  const ProfileRightBar = () => {
    return(
      <>
        <h4 className="rightbar__title">User Information</h4>
        <div className="rightbar__Info">
          <div className="rightbar__infoItem">
            <span className="rightbar__infoKey">City: </span>
            <span className="rightbar__infoValue">Abuja Nigeria </span>
          </div>
          <div className="rightbar__infoItem">
            <span className="rightbar__infoKey">From: </span>
            <span className="rightbar__infoValue">Ebonyi State </span>
          </div>
          <div className="rightbar__infoItem">
            <span className="rightbar__infoKey">Relationship: </span>
            <span className="rightbar__infoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbar__title">User Friends</h4>
        <div className="rightbar__followings">
            <div className="rightbar__following">
              <img className="rightbar__follImgowing" src="/assets/person/1.jpeg" alt="" />
              <span className="rightbar__followingName">John Carter</span>
            </div>
            <div className="rightbar__following">
              <img className="rightbar__follImgowing" src="/assets/person/2.jpeg" alt="" />
              <span className="rightbar__followingName">John Carter</span>
            </div>
            <div className="rightbar__following">
              <img className="rightbar__follImgowing" src="/assets/person/3.jpeg" alt="" />
              <span className="rightbar__followingName">John Carter</span>
            </div>
            <div className="rightbar__following">
              <img className="rightbar__follImgowing" src="/assets/person/4.jpeg" alt="" />
              <span className="rightbar__followingName">John Carter</span>
            </div>
            <div className="rightbar__following">
              <img className="rightbar__follImgowing" src="/assets/person/5.jpeg" alt="" />
              <span className="rightbar__followingName">John Carter</span>
            </div>
            <div className="rightbar__following">
              <img className="rightbar__follImgowing" src="/assets/person/6.jpeg" alt="" />
              <span className="rightbar__followingName">John Carter</span>
            </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
        <div className="rightbar__wrapper">
          {profile ? <ProfileRightBar /> : <HomeRightbar />}
          
        </div>
    </div>
  )
}
