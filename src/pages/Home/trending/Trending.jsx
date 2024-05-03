

import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import ContentWrepper from "../../../components/contentWrapper/ContentWrepper";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Carsul from "../../../components/cursoul/Carsul";


const Trending = () => {
  const [endpoint,setendpoint]=useState("day")
  const {data,loading} = useFetch(`/trending/all/${endpoint}`)


  const ontaTabeChange = (tab) => {
    setendpoint(tab==="Day" ? "day":"week")
  };

  return (
    <div className="carouselSection">
      <ContentWrepper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} ontaTabeChange={ontaTabeChange} />
      </ContentWrepper>
      <Carsul data={data?.results} loading={loading}/>
    </div>
  );
};

export default Trending;
