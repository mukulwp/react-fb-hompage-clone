import React from 'react';
import './Rightbar.css';
import BirthdayImage from '../../../assets/gift.png'
import AdBanner from '../../../assets/ad.png'
import { Users } from '../../../data/postData'

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrap">
        <div className="birthdayContainer">
          <img src={BirthdayImage} alt="birthday" />
          <span className="birthdayText">
            <strong>Pola Foster</strong> and <b>3 other friends</b> have a
            birthday today.
          </span>
        </div>
        <div className="rightbarAd">
          <img src={AdBanner} alt="ad" />
        </div>
        <div className="rightbarOnlineFriends">
          <h4>Online Friends</h4>
          <ul className="rightbarOnlineFreindsList">
            {Users.map((user, index) => {
              const{profilePicture, username} = user
              return (
                <li key={index}>
                  <div className="rightbarProfileImgContainer">
                    <img src={profilePicture} alt="profile" />
                    <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUsername">{username}</span>
                </li>
              );
           })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Rightbar