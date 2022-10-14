import React,{useState,useRef,useEffect} from 'react';
import { FaSearch } from "react-icons/fa";
import styled from 'styled-components';
import axios from 'axios';



export const Search = () => {
    const [Text,setText]= useState('');
    const [searchTerm,setSearchTerm]= useState([]);
    const [isLoading,setIsLoading]= useState(true);


    const fetchData=(breedname)=>{
      setIsLoading(true);
       axios.get(`https://dog.ceo/api/breed/${breedname}/images`)
       .then(res=>{
          // console.log(res.data)
          setSearchTerm(res.data);
          setIsLoading(false);
          
       })
       .catch(e=>{
          console.log(e);
          setIsLoading(false);
       })
  }
  
  const handleInputChange=(e)=>{
   console.log(e.target.value)
   setText(e.target.value);
  }

  useEffect(()=>{
     fetchData(Text);
  },[Text])
 
    console.log(searchTerm);

  return (
    <MainDivWrapper>
    <InnerDivWrapper>
        <div>
            <input 
            value={Text} 
            onChange={handleInputChange}
            type="text"  
            id='breed' 
            placeholder='Enter Breed Name'
            />
        </div>
        {/* <div>
        <button onClick={handleSearch}>
            <FaSearch />
        </button>
    </div> */}
    </InnerDivWrapper>
    
    </MainDivWrapper>
  )
  
   
}

const MainDivWrapper= styled.div`
   width:50%;
   height:fit-content;
   padding:2%;
   border:2px solid purple;
   margin:20px auto;
   display:flex;
   align-items:center;
   justify-content:center;

`;

const InnerDivWrapper= styled.div`
   width:50%;
   height:fit-content;
   display:flex;
   align-items:center;
   justify-content:center;
   gap:20px;

`;




// https://dog.ceo/api/breed/{breedname}/images