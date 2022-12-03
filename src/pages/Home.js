import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/message">Message</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/market">Market</Link>
        </li>
        <li>
          <Link to="/marketdetail">MarketDetail</Link>
        </li>
        <li>
          <Link to="/otheruserprofile">OtherUserProfile</Link>
        </li>
        <li>
          <Link to="/activebid">ActiveBid</Link>
        </li>
        <li>
          <Link to="/saved">Saved</Link>
        </li>
        <li>
          <Link to="/myprofilepreview">MyProfilePreview</Link>
        </li>
        <li>
          <Link to="/myprofilecollection">MyProfileCollection</Link>
        </li>
        <li>
          <Link to="/myprofilewallet">MyProfileWallet</Link>
        </li>
        <li>
          <Link to="/myprofilehistory">MyProfileHistory</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
