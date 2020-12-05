import React from 'react'
import {dataContext} from "../App";
import Countdown from 'react-countdown';

function Headers({setScreen}) {  
   const { dataState } = React.useContext(dataContext);
   const [time ,setTime] = React.useState();
   const Completionist = () =>{
    setScreen(false);
    return null;
   };
    return (
        <nav>
         <div className="top-side">
          <h2>Design Facility</h2>
          </div>
          <ul>
           <li>{dataState.examTitle}</li>
           <Countdown date={Date.now() + dataState.examDuration * 60 * 1000}>
           <Completionist />
         </Countdown>
          </ul>
        </nav>
    )
}

export default Headers
