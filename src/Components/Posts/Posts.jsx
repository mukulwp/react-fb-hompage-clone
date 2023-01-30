import React, { useState } from 'react'
import './Posts.css'
import HeartEmoji from '../../assets/heart.png'
import LikeEmoji from '../../assets/like.png'
import { MoreVert } from '@mui/icons-material'
import {Users} from '../../data/postData'

const Posts = ({ desc, photo, date, userId, like, comment }) => {
    const [reactCount, setReactCount] = useState(like);
    const [isReact, setIsReact] = useState(false);

    const handleReact = () => {
        setIsReact(!isReact);
        
        isReact
          ? setReactCount((reactCount) => reactCount - 1)
          : setReactCount(reactCount + 1);
    }

  return (
    <div className="post">
      <div className="postWrap">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((user) => user.id === userId)[0].profilePicture}
              alt="profilepic"
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === userId)[0].username}
            </span>
            <div className="postDate">{date}</div>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img src={photo} alt="PostImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={HeartEmoji} alt="heart" onClick={handleReact} />
            <img src={LikeEmoji} alt="like" onClick={handleReact} />
            <span className="postReactCounter">
              {reactCount} people like it
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">
              {comment} {comment > 1 ? "Comments" : "Comment"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts