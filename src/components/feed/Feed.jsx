import Share from "../share/Share"
import Post from "../post/Post"
import "./Feed.css"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Feed({username}) {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    const fetchPosts = async() =>{
      const res = await axios.get("/posts/timeline/6287b0159cf461d68728a519")
      setPosts(res.data)
    }
    fetchPosts()
  },[])
  return (
    <div className="feed">
        <div className="feed__wrapper">
              <Share />
              {posts.map((p) =>(
                <Post key={p._id} post={p} />
              ))}
        </div>
    </div>
  )
}

