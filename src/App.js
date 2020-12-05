
import React from "react";
import Footer from "./component/Footer"
import Headers from "./component/Headers"
import Question from "./component/Question"
import Sectiontabs from "./component/Sectiontabs"
import User from "./component/User"
import  "./Style/main.scss";
import authReducer  from "./reducers/authReducer";
import dataReducer  from "./reducers/dataReducer"; 
import axios from "axios";

export const AuthContext = React.createContext();
export const dataContext = React.createContext();



/* initial state for auth */
const initialState = {
  isAuthenticated :true,/* default */
  user:"vipin chandra",/* default */
  token:null,
}

const initialDataState = {
  examTitle:null,
  examDuration:null,
  sectionCount:0,
  sections :[],
}



function App() {
  const [state, dispatch] = React.useReducer(authReducer, initialState);
  const [dataState, dispatchData] = React.useReducer(dataReducer, initialDataState);
  const [timeScreen , setScreen] = React.useState(true);
  const [activeSection , setActiveSection] = React.useState(0)
  const [activeQues , setActiveQues] = React.useState(0);
  const [activeOption , setActiveOption] = React.useState("");
  
  /* coundown  */
  
  

  /* get data from server and storing in state */
  React.useEffect(() => {
    axios.get('/[vipin chandra]')
    .then((resp)=>{
      console.log(resp)
       dispatchData({
         type : "GET",
         payload:resp.data
       })
    })
    .catch((err)=>{
      console.log(err);
    })

  }, [state])

  return (
    <AuthContext.Provider value = {{
      state,dispatch
    }}>
    <div className="App">
    <dataContext.Provider value={{
      dataState,
    }}>
    {timeScreen ?<div className="mainBar">
       <Headers setScreen ={setScreen}/>
       <Sectiontabs activeSection={activeSection} setActiveSection={setActiveSection} setActiveQues={setActiveQues}/>
       {dataState.sectionCount > 0 ?<Question activeQues={activeQues} activeSection={activeSection} setActiveOption={setActiveOption}/>:""}
       {dataState.sectionCount >0?<Footer  activeOption={activeOption} activeSection={activeSection}  activeQues={activeQues} setActiveSection={setActiveSection} setActiveQues={setActiveQues} />:""}
     </div> :
    <div>Thank you!!</div>
    }
    {dataState.sectionCount > 0 ?
      <User activeSection={activeSection} setActiveQues={setActiveQues} activeQues={activeQues}/>:
      ""
    }
    
    </dataContext.Provider>
    </div>
    </AuthContext.Provider>
    
    
  );
}

export default App;
