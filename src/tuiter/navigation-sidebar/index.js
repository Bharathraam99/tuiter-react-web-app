import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faBell,
  faEnvelope,
  faBookmark,
  faUser,
  faEllipsisH,
  faCompass,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "./nav.css";
const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const { currentUser } = useSelector((state) => state.user);

  const links = [
    { label: "Home", icon: faHome },
    { label: "Explore", icon: faCompass },
    { label: "Notifications", icon: faBell },
    { label: "Messages", icon: faEnvelope },
    { label: "Bookmarks", icon: faBookmark },
    { label: "Lists", icon: faListAlt },
    // { label: "Profile", icon: faUser },
    { label: "More", icon: faEllipsisH },
  ];

  return (
    <div className="list-group">
      <Link to={"/tuiter"} className="list-group-item text-capitalize">
        <span className="fontIcon">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
      </Link>
      {links.map((link) => (
        <Link
          to={`/tuiter/${link.label.toLowerCase()}`}
          className={`list-group-item text-capitalize ${
            active === link.label.toLowerCase() ? "active" : ""
          }`}
          key={link.label}
        >
          <div className="link-container">
            <span className="fontIcon">
              <FontAwesomeIcon icon={link.icon} />
            </span>
            <span className="navText d-none d-lg-inline-block">
              {link.label}
            </span>
          </div>
        </Link>
      ))}
      {!currentUser && (
        <Link className="list-group-item text-capitalize" to="/tuiter/login">
          <div className="link-container">
            <span className="fontIcon">
              <i class="fas fa-sign-in-alt"></i>
            </span>
            <span className="navText d-none d-lg-inline-block">Login</span>
          </div>
        </Link>
      )}
      {!currentUser && (
        <Link className="list-group-item text-capitalize" to="/tuiter/register">
          <div className="link-container">
            <span className="fontIcon">
              <i class="fas fa-user-plus"></i>
            </span>
            <span className="navText d-none d-lg-inline-block">Register</span>
          </div>
        </Link>
      )}
      {currentUser && (
        <Link className="list-group-item text-capitalize" to="/tuiter/profile">
          <div className="link-container">
            <span className="fontIcon">
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </span>
            <span className="navText d-none d-lg-inline-block">Profile</span>
          </div>
        </Link>
      )}
      <button className="btn btn-primary rounded-pill mt-3">Tuit</button>
    </div>
  );
};

export default NavigationSidebar;
