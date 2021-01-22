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

  componentDidMount() {
    this.props.fetchAllCampus();
  }

  render() {
    return (
         console.log("add campus: inside return")
        //<AllCampusView allCampus={this.props.allCampus} />
       )
  }
} 


// Map state to props;
const mapState = state => {
  return {
    allCampus: state.allCampus
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    fetchAllCampus: () => dispatch(fetchAllCampusThunk())
  }
}

// Type check props;
AddCampusContainer.propTypes = {
  allCampus: PropTypes.array.isRequired,
  fetchAllCampus: PropTypes.func.isRequired
}

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AddCampusContainer);