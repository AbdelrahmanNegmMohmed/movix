import { fetchDataFromApi } from '../Utils/api';
import { useState,useEffect } from 'react';

function useFetch(url) {
    const [data,setdata] = useState(null);
    const [loading,setloading] = useState(null);
    const [error, seterroe] = useState(null)
    useEffect(()=>{
        setloading("loading...")
        setdata(null);
        seterroe(null)

        fetchDataFromApi(url).then((res)=>{
            setloading(false)
            setdata(res)
    
        }).catch((err)=>{
            setloading(false);
            seterroe("somthing went wrong !")
    
        })
    },[url])



  return   {data,loading,error}

}

export default useFetch;