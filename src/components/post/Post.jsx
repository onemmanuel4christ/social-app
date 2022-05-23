import "./Post.css"
import { MoreVert } from "@material-ui/icons"
import { useEffect, useState } from "react";
import axios from "axios";
import { format} from "timeago.js"
import {Link} from "react-router-dom"
export default function Post({post}) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({})

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() =>{
    const fetchUser = async() =>{
      const res = await axios.get(`users/${post.userId}`)
      setUser(res.data)
    }
    fetchUser()
  },[post.userId])

  const likeHandler =() => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post"> 
        <div className="post__wrapper">
          <div className="post__top">
            <div className="post__topLeft">
              <Link to={`profile/${user.username}`}>
                <img 
                  className="post__profileImage" 
                  src={user.profilePicture || PF+"person/noAvatar.webp"} 
                  alt=""
                 />
              </Link>
                <span className="post__username">{user.username}</span>
                <span className="post__date">{format(post.createdAt)}</span>
            </div>

            <div className="post__topRight">
                <MoreVert /> 
            </div>
          </div>
          <div className="post__center">
            <span className="post__text">{post?.desc}</span>
            <img className="post__image" src={PF+post.img} alt="" />
          </div>
          <div className="post__bottom">
            <div className="post__bottomLeft">
            <img className="likeIcon" src={`${PF}like.png`} alt="" 
              onClick={likeHandler}
            />
            <img className="likeIcon" src={`${PF}heart.png`} alt="" 
              onClick={likeHandler}
                        />
            <span className="like__counter">{like} likes</span>
            </div>
            <div className="post__bottomRight">
              <span className="post__commentText">{post.comment} Comments</span>
            </div>
          </div>
        </div> 
    </div>
  )
}
