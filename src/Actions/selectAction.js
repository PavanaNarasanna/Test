import * as types from './actionTypes';

export function loadDept(){
    console.log('dept');
    let deptData=[
        { value: 'HR', label: 'HR' },
        { value: 'Engineering', label: 'Engineering' },
      ];
    return function(dispatch){
        return dispatch({
            type:types.LOAD_DEPT,deptload:deptData
        })
    }
}
export function loadEmp(dept){
    let empData=[];
    let empOptionsHR = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
    ];
    let empOptionsEng = [
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' },
    ];
      if(dept==='HR')
      {
          empData=empOptionsHR;
      }
      else if(dept === 'Engineering')
      {
        empData=empOptionsEng;
      }
    return {type:types.LOAD_EMP,empload:empData};
}
