import React from 'react'
import {dataContext} from "../App";
function Footer({activeOption , activeSection , activeQues , setActiveSection, setActiveQues}) {

  const { dataState } = React.useContext(dataContext);
  let eachName = `Section${activeSection + 1}`;
  const eachSection = dataState.sections[activeSection][eachName];
  const totalSections = dataState.sectionCount-1;

  const [subState,setSubState] = React.useState(false);
    const  handleSaveNext =()=>{
        console.log("asdad");
        /* submit the active option */
        console.log(eachSection.length);
        /* next question or next section after saving the option*/
        if(activeQues == eachSection.length-1){
          if(activeSection == totalSections){
          setSubState(true);
          }
          if(activeSection < totalSections){
            setActiveSection(activeSection + 1);
            setActiveQues(0);
          }
        }
        if(activeQues < eachSection.length-1){
          setActiveQues(activeQues + 1);
        }
        
    }
    return (
        <footer>
         
          <div>
          <button className="btn question-btn">Mark for Review & Next</button>
          <button className="btn question-btn" >Clear Response</button>
          </div>
          {subState === false ?<button className="btn save-btn" onClick={()=>handleSaveNext()}>Save and Next</button>:<h4>All Saved</h4>}
        </footer>
    )
}

export default Footer
