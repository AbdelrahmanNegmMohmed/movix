import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrepper from "../contentWrapper/ContentWrepper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

useEffect(()=>{
  window.scrollTo(0,0);

},[location])

  const controlNavbar =()=>{
    if(window.scrollY > 200){
      if(window.scrollY > lastScrollY && !mobileMenu){
        setShow("hide")
      }else{
        setShow("show")
      }
    }else{
      setShow("top")
    }
    setLastScrollY(window.scrollY);
  
  }
  useEffect(()=>{
    window.addEventListener("scroll",controlNavbar)
    return ()=>{
      window.removeEventListener("scroll",controlNavbar)
      
    }

  },[lastScrollY])

  const opensearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };
  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };
  
  const searchqueryHandelar = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(()=>{
        setShowSearch(false)

      },1000)
    }
  };
  const navigationHandler = (type) =>{
    if(type === "movie"){
      navigate("/explore/movie")
    }else{
      navigate("/explore/tv")
    }
    setMobileMenu(false);


  }

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrepper>
        <div className="logo" onClick={() => navigate(`/`)}>
          <img src={logo} alt="" />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={()=>navigationHandler("movie")}>Movies</li>
          <li className="menuItem" onClick={()=>navigationHandler("tv")}>TV Shows</li>
          <li className="menuItem">
            <HiOutlineSearch onClick={opensearch} />
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={opensearch} />

          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrepper>
      {showSearch && <div className="searchBar">

        <ContentWrepper>
        <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onKeyUp={searchqueryHandelar}
              onChange={(e) => setQuery(e.target.value)}
            />
            <VscChromeClose onClick={() => setShowSearch(false)} />

          </div>
        </ContentWrepper>
      </div>

      }
    </header>
  );
};
export default Header;
