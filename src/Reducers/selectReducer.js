export default (
  state = {
    dept:[],
    emp:[],
  },
  action
) => {
  console.log(action.type);
  switch (action.type) {
    case 'LOAD_DEPT':
      return {
          ...state,
          dept: action.deptload,
      }
    case 'LOAD_EMP':
    console.log(action.empload)
      return {
          ...state,
          emp:action.empload,

      }  
    default:
      return state;
  }
};