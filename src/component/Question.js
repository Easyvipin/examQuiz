import React from 'react'
import {dataContext} from "../App";

function Question({activeQues,activeSection,setActiveOption}) {
    const { dataState } = React.useContext(dataContext);
    let eachName = `Section${activeSection + 1}`;
    const eachSection = dataState.sections[activeSection][eachName][activeQues];
    return (
        
        <section className="question">
         <div className="question-det">
         <h3>Question Number:{activeQues+1}</h3>
         <p>{eachSection.quesText}</p>
         </div>
         <div className="question-option">
         <form action="">
         <ul>
         <li>
         <span>A</span><input type="radio" id="option1" name="option" value={eachSection.option1} onClick={(e)=>setActiveOption(e.target.value)} />
         <label for="option1">{eachSection.option1}</label>
         </li>
         <li>
         <span>B</span><input type="radio" id="option2" name="option" value={eachSection.option2} onClick={(e)=>setActiveOption(e.target.value)}/>
         <label for="option2">{eachSection.option2}</label>
         </li>
         <li>
         <span>C</span><input type="radio" id="option3" name="option" value={eachSection.option3} onClick={(e)=>setActiveOption(e.target.value)}/>
         <label for="option3">{eachSection.option3}</label>
         </li>
         <li>
         <span>D</span><input type="radio" id="option4" name="option" value={eachSection.option4} onClick={(e)=>setActiveOption(e.target.value)}/>
         <label for="option4">{eachSection.option4}</label>
         </li>
         </ul>
         </form>
         </div>
         
        </section>
    )
}

export default Question
