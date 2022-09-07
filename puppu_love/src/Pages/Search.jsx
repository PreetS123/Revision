import React from 'react';
import { FaSearch } from "react-icons/fa";
import styled from 'styled-components'

export const Search = () => {
  return (
    <MainDivWrapper>
    <InnerDivWrapper>
        <div>
            <input type="text" id='breed' placeholder='Enter Breed Name' />
        </div>
        <div>
        <button>
            <FaSearch />
        </button>
    </div>
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

