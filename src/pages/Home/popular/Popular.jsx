import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import ContentWrepper from "../../../components/contentWrapper/ContentWrepper";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Carsul from "../../../components/cursoul/Carsul";

const Popular = () => {
  const [endpoint, setendpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const ontaTabeChange = (tab) => {
    setendpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <ContentWrepper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs
          data={["Movies", "TV shows"]}
          ontaTabeChange={ontaTabeChange}
        />
      </ContentWrepper>
      <Carsul data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default Popular;
