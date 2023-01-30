import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircle, RssFeed, School, WorkOutline } from '@mui/icons-material';
import React from 'react';
import './Leftbar.css'
import {Users} from '../../../data/postData'

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="leftbarWrap">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <Chat className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Chats</span>
          </li>
          <li className="leftbarListItem">
            <PlayCircle className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Group className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Bookmarks</span>
          </li>{" "}
          <li className="leftbarListItem">
            <HelpOutline className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Quesitons</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutline className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <Event className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem">
            <School className="leftbarListItemIcon" />
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarLine" />
        <ul className="leftbarFriendList">
          {Users.map((user) => {
            const{id, profilePicture, username} = user
            return (
              <li key={id} className="leftbarFriend">
                <img src={profilePicture} alt="Friend" className="leftbarFriendImg" />
                <span className="leftbarFriendName">{username}</span>
              </li>
            );
         })}
         
        </ul>
      </div>
    </div>
  );
}

export default Leftbar