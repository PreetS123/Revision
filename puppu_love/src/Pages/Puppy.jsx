import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { Card } from '../Components/Card';

export const Puppy = () => {
    const [allData,setAllData]= useState([]);
    const [isLoading,setIsLoading]= useState(true);
    const [isError,setIsError]= useState(true);

    let breed_name= JSON.parse(localStorage.getItem('breedname'))
    const fetchData=()=>{
        setIsError(false)
        setIsLoading(true);
         axios.get(`https://dog.ceo/api/breed/${breed_name}/images`)
         .then(res=>{
            // console.log(res.data)
            setAllData(res.data.message);
            setIsLoading(false);
            

         })
         .catch(e=>{
            console.log(e);
            setIsError(true)
            setIsLoading(false);
         })
    }
    useEffect(()=>{
       fetchData();
    },[])

    console.log(allData);


    {
        if(isLoading){
            return(
                <>
                <h1>Loading................</h1>
                </>
            )
        }
       }
      
       {
        if(isError){
            return(
                <>
                <h1>Error................</h1>
                </>
            )
        }
       }

       
       {
        if(!isError&& !isLoading){
            return(
                <>
                 {
               allData.length>0 && allData.map((item)=>{
                    return <Card item={item} key={nanoid}/>
                })
             }
                </>
            )
        }
       }






}
