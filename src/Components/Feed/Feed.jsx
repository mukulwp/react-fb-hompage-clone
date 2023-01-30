import React from 'react';
import Posts from '../Posts/Posts';
import Share from '../Share/Share';
import './Feed.css'
import {PostsData} from '../../data/postData';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrap">
        <Share />
        {PostsData.map((post) => {
          const { id, desc, photo, date, userId, like, comment } = post;
          return (
            <Posts key={id} desc={desc} photo={photo} date={date} userId={ userId } like={like} comment={comment} />
          )
        })}
      </div>
    </div>
  );
}

export default Feed