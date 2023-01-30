import React from 'react';
import "./Topbar.css";
import profilePic from "../../assets/person/1.jpeg"
import { Chat, Notifications, Person, Search } from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="topbarLogo">
          <span>facebook</span>
        </div>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className='searchIcon'/>
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <div className="topbarLink">Homepage</div>
          <div className="topbarLink">Timeline</div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">5</span>
          </div>
              </div>
              <img src={profilePic} alt="ProfileImage" className="profilePic" />
      </div>
    </div>
  );
}

export default Topbar