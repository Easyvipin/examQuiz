import React from 'react';
import {dataContext} from "../App";
import Profile from "../images/as.png";
function User({activeSection,setActiveQues,activeQues}) {
    const { dataState } = React.useContext(dataContext);
    let eachName = `Section${activeSection + 1}`;
    const eachSection = dataState.sections[activeSection][eachName];
    return (
       <aside className="user-dashboard">
       <div className="profile">
       <img src={Profile} alt="" className="profile-img"/>
       <h4>Best of Luck!</h4>
       </div>
       <ul className="stats">
        <li className="each-stats"><span className="order stat-visit">0</span>Question not Visited</li> 
        <li className="each-stats"><span className="order stat-undone">1</span>Question not Answered</li> 
        <li className="each-stats"><span className="order stat-done">2</span>Question Answered</li> 
        <li className="each-stats"><span className="order stat-mark">3</span>Question Marked</li> 
        <li className="each-stats"><span className="order stat-review">4</span>Question Answererd & Marked for Review</li> 
       </ul>
   
       <div className="section-det">
       <h2>Section{activeSection + 1}</h2>
        <h5>Choose a question</h5>
        {eachSection.map((item,index)=>{
            if(index == 0){
                return(
                    <button onClick={(e)=>{
                setActiveQues(index);
                let elem = document.querySelector(".active");
                if(elem !== null){
                    elem.classList.remove("active");
                }
                e.target.className="active";     
            }} value={index} className="active" id="click">{index+1}</button>
                )
            }
            return (
            <button onClick={(e)=>{
                setActiveQues(index);
                let elem = document.querySelector(".active");
                if(elem !== null){
                    elem.classList.remove("active");
                }
                e.target.className="active";     
            }} value={index} className=" " id="click">{index+1}</button>
            )      
        })}
       </div>
       <button className="btn submit-btn">Submit Exam</button>
       </aside>
    )
}

export default User
