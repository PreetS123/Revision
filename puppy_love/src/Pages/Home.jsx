import React, { useEffect,useState } from 'react'
import axios from 'axios';
import {nanoid} from 'nanoid';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
            <PuppyNameWrapper>
             {
           allData.length>0 && allData.map((item,index)=>{
                return(
                    <PuppyDiv key={nanoid()}>
                    <div>
                        <h5 onClick={()=>saveItem(item)}>{item}</h5>
                    </div>
                    </PuppyDiv>
                )
            })
         }
            </PuppyNameWrapper>
        )
    }
   }


}


const PuppyNameWrapper=styled.div`
height:90vh;
overflow: scroll;
width:40%;
margin:50px auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:2px;
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;
const PuppyDiv=styled.div`
width:70%;
text-align:center;
height:50px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;