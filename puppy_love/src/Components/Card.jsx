import React from 'react';
import styled from 'styled-components';

export const Card = ({item}) => {
  return (
    <ImgDiv>
        <ImgWrapper src={item} alt="" />
    </ImgDiv>
  )
}

const ImgDiv=styled.div`
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
display:flex;
align-item:center;
justify-content:center;
padding:1%;
`;
const ImgWrapper=styled.img`
height:200px;

`;
