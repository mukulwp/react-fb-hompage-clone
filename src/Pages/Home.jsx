import React from 'react'
import './Home.css';
import Topbar from '../Components/Topbar/Topbar'
import Leftbar from '../Components/Sidebar/Leftbar/Leftbar'
import Feed from '../Components/Feed/Feed'
import Rightbar from '../Components/Sidebar/Rightbar/Rightbar'

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home