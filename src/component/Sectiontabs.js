import React from 'react'
import {dataContext} from "../App";
function Sectiontabs({activeSection,setActiveSection,setActiveQues}) {
  const { dataState } = React.useContext(dataContext);
  
    return (
        <div className="sections"> 
           <span className="section-button active-section">Section{activeSection + 1}</span>
           {dataState.sections.map((item,index)=>{
             if(index == 0){
              return <button  onClick={(e)=>{
                setActiveSection(index)
                setActiveQues(0);
                document.getElementById(`${e.target.value}`).style.display="none";
                document.getElementById(`${activeSection}`).style.display="block";
               }} className="section-button" id={index} value={index }style={{display:"none"}}>Section{index + 1}</button>
             }  
             return <button  onClick={(e)=>{
               setActiveSection(index);
               setActiveQues(0);
               document.getElementById(`${e.target.value}`).style.display="none";
               document.getElementById(`${activeSection}`).style.display="block";
              }} className="section-button" id={index} value={index}>Section{index + 1}</button>
           }
           )}
        </div>
    )
}

export default Sectiontabs
