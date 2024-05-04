import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./Utils/api";
import { useDispatch, useSelector } from "react-redux";
import { gitApiConfigration,getGeneas } from "./Store/HmoeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/404/PageNotFound";
import SearchResult from "./pages/serchresult/SearchResult";
import Explore from "./pages/explore/Explore";
import Detailse from "./pages/details/Details";


function App() {
  const { url } = useSelector((state) => state.home);
  console.log(url);
  const dispatch = useDispatch();


  useEffect(() => {
    fetchApiConfig();
    genresCall()
  }, []);



  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);
      const url = {
        backdrop : res.images.secure_base_url + "original",
        poster : res.images.secure_base_url + "original",
        profile : res.images.secure_base_url + "original",

      }
      dispatch(gitApiConfigration(url));
    });
  };

  const genresCall = async() =>{
    let promisis = []
    let endPoints = ["tv", "movie"]
    let allGenres = {}
    endPoints.forEach((url)=>{
      promisis.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promisis);
    console.log(data,"data");
    data.map(({genres})=>{
      return genres.map((item)=>(allGenres[item.id]=item))
    })
    dispatch(getGeneas(allGenres))

  }



  return (
    <BrowserRouter>
        <Header/>
         <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:mediaType/:id" element={<Detailse />}/>
        <Route path="/search/:query" element={<SearchResult/>}/>
        <Route path="/explore/:mediaType" element={<Explore/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
  );
}
export default App;
