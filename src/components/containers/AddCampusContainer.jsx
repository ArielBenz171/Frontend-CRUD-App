import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { addCampus } from "../../store/utilities/Campus"; 
// Get the action creator for campuses
//import AddCampusView from "../views/AddCampusView";

// Smart container;
class AddCampusContainer extends Component {
    constructor (props){
        super(props);
        this.state = {
            campusName: '',  
            address: '',
            campusImageUrl: '',
            description: ''
        };
    }
    handleValidation =(e) => {
        let campusName = '';
        let formIsValid =true;
        let error ={};
        let address ='';
    }

    handleChange =(e) => {
        e.preventDefault(); 
        this.setState ( {[e.target.name]:e.target.value});   
    }



  render() {
    return (
         console.log("add campus: inside return")
        //<AllCampusView allCampus={this.props.allCampus} />
       )
  }
} 


// Type check props;
AddAStudentContainer.propTypes = {
    campusName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,

};

// Export our store-connected container by default;
export default AddCampusContainer;