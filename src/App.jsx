import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./Utils/api";
import { useDispatch, useSelector } from "react-redux";
import { gitApiConfigration } from "./Store/HmoeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Detilse from "./pages/details/Detilse";
import PageNotFound from "./pages/404/PageNotFound";
import SearchResult from "./pages/serchresult/SearchResult";
import Explore from "./pages/explore/Explore";


function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(gitApiConfigration(res));
    });
  };

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mediaType/:id" element={<Detilse/>}/>
        <Route path="/search/:query" element={<SearchResult/>}/>
        <Route path="/explore/:mediaType" element={<Explore/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
