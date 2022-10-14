import React from 'react';
import {Routes,Route, useParams} from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';
import { Puppy } from './Pages/Puppy';
import { Search } from './Pages/Search';

export const AllRoute = () => {
    // let breed= useParams();
  return (
    <>
      <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/puppy' element={<Puppy/>}/>
           <Route path='/search' element={<Search/>}/>
        </Routes>
    </>
  )
}
