import React, { useEffect,useState } from 'react'
import axios from 'axios';
import {nanoid} from 'nanoid';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const [allData,setAllData]= useState([]);
    const [isLoading,setIsLoading]= useState(true);
    const [isError,setIsError]= useState(true);
    const navigate= useNavigate();

    const saveItem=(item)=>{
          localStorage.setItem('breedname',JSON.stringify(item));
          navigate('/puppy')
    }

    const fetchData=()=>{
        setIsError(false)
        setIsLoading(true);
         axios.get(`https://dog.ceo/api/breeds/list/all`)
         .then(res=>{
            // console.log(res.data)
            let data= [];
            for(var key in res.data.message){
                data.push(key)
            }
            setAllData(data);
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
           allData.length>0 && allData.map((item,index)=>{
                return(
                    <div key={nanoid()}>
                    <div>
                        <h5 onClick={()=>saveItem(item)}>{item}</h5>
                    </div>
                    </div>
                )
            })
         }
            </>
        )
    }
   }


}
