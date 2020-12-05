const dataReducer = (state , action) =>{
  switch(action.type){
      case 'GET':
          return {
              ...state,
              examTitle:action.payload.exam.examTitle,
              examDuration:action.payload.exam.examDurationInMinutes,
              sectionCount:action.payload.exam.sections.length,
              sections:action.payload.exam.sections  
          }
       default :
            return state;
  }
}
export default dataReducer;