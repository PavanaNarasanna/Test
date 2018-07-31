import React, { Component } from 'react';
import Select from 'react-select';
import './App.css';
import {loadDept,loadEmp} from './Actions/selectAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    selectedOption: null,
    isDataLoaded: false,
  }
  this.handleChange=this.handleChange.bind();
}
  handleChange = (selectedOption) => {
    this.props.dispatch(loadEmp(selectedOption.value));
  }

  handleClick() {
    this.setState({ selectedOption: this.state.value })
    let id = this.state.selectedOption.value;
          this.setState({
            empId: 1
          });
  }
  componentDidMount() {
    this.props.dispatch(loadDept());
  }
  render() {
    const { selectedOption } = this.state;
    const { isDataLoaded } = this.state.isDataLoaded;

    return (
      <div className="App">
        <div>
          <label className="department-name">Departments</label>

          <Select className="select-option-department"
            value={this.props.dept.value}
            onChange={this.handleChange}
            options={this.props.dept}
          />

          <label className="employee-id">EmployeeId:</label>
          <Select className="select-option-employeeId"
             value={this.props.emp.value}
             options={this.props.emp}
          />
        </div>
        <div>
          <button className="get-details-button" onClick={this.handleClick.bind(this)}>
            Get Details
          </button>
          <button className="clear-button">
            clear
          </button>
        </div>
        <div className="details">
        <label className="empId">ID: {this.state.empId}</label>
        </div>
        
      </div>
    );
  }
}
App.propTypes ={
  loadDept:PropTypes.func,
  dispatch:PropTypes.func,
  emp:PropTypes.array,
  dept:PropTypes.array,
}
function mapStateToProps(state){
  console.log(state);
  return{
  emp:state.selectReducer.emp,  
  dept:state.selectReducer.dept
  }
}
const mapDispatchToProps = dispatch => ({
   dispatch:dispatch
});
export default connect(mapStateToProps, mapDispatchToProps)(
  App
);
