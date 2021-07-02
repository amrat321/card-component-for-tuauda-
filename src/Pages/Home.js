import React from 'react';
import {
  Link,
} from 'react-router-dom';
import SeduleCard from './../sheduleCard/shaduleCard'
import Calender from './../sheduleCard/calender'
const Home = () => (
  <div>
    <h1>Home</h1>
  <div className="menu">
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/messages">Messages</Link> </li>
              <li> <Link to="/about">About</Link> </li>
              <li> <Link to="/Contact">Contact</Link> </li>

            </ul>
            <SeduleCard/>
            <Calender/>
        </div>
        
  </div>
);

export default Home;