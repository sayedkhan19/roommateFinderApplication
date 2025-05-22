import React from 'react';
import Slider from '../components/Slider';
import RoomCard from '../pages/RoomCard';
import LoadRooms from '../components/LoadRooms';
import ExtraSectionCount from '../pages/ExtraSectionCount';
import BestWe from '../pages/BestWe';

const Home = () => {
    return (
        <div>
           {/* <div className='slider'>
                <Slider></Slider>
           </div> */}

           <div>
                <LoadRooms></LoadRooms>
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