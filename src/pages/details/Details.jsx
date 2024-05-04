import React from 'react'
import useFetch from "../../hooks/useFetch";
import { useParams } from 'react-router-dom'; 
import "./style.scss";
import DetialsBanner from './DetailsBanner/DetialsBanner';
import Cast from './cast/Cast';
import VideosSection from './videoSection/VideoSeaction';
function Detailse() {
  const {mediaType,id} = useParams();
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`);
  const {data : credits, loading:creditsLoading} = useFetch(`/${mediaType}/${id}/credits`);
  return ( 
   
    <div>
      <DetialsBanner  video={data?.resuls?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading}/>
    </div>
  );
};

export default Detailse;