import React from 'react';
import Slider from '../components/Slider';
import RoomCard from '../pages/RoomCard';
import LoadRooms from '../components/LoadRooms';
import ExtraSectionCount from '../pages/ExtraSectionCount';
import BestWe from '../pages/BestWe';
import Hero from '../pages/Hero';

const Home = () => {
    return (
        <div className='bg-[ #F2F8FC]'>
            <title>Roomate || Home</title>
           <div className='slider'>
                <Slider></Slider>
           </div>
           
          <div>
            
          </div>

           <div>
                <LoadRooms></LoadRooms>
           </div>

          
          
           <div>
            <Hero></Hero>
           </div>
          
           <div>
            <ExtraSectionCount></ExtraSectionCount>
           </div>
          
           <div>
            <BestWe></BestWe>
           </div>
        
        
        </div>
    );
};

export default Home;