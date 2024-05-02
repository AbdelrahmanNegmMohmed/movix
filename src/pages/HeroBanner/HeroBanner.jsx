import React, { useEffect } from "react";
import { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../components/lazyloadimg/Img";
import ContentWrepper from "../../components/contentWrapper/ContentWrepper";

function HeroBanner() {
  const [background, setbackground] = useState("");
  const [query, setquery] = useState("");
  const navegate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setbackground(bg);
  }, [data]);

  const searchqueryHandelar = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navegate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && <div className="backdrop-img">

          <Img src={background} />
        </div>
      }
      <ContentWrepper>
        <div className="HeroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onKeyUp={searchqueryHandelar}
              onChange={(e) => setquery(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrepper>
    </div>
  );
}

export default HeroBanner;
