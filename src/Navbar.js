import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  // my state
  const [showNav, setShowNav] = useState(false);
  // my refs
  const linksContainerRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    // this will show useful css info about the dom element referenced
    const linksHeight = linkRef.current.getBoundingClientRect().height;
    if (showNav) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showNav]);
  // useeffect will run for every showNav changes
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={() => setShowNav(!showNav)}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linkRef}>
            {links.map((each) => {
              const { id, url, text } = each;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((each) => {
            const { id, url, icon } = each;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
