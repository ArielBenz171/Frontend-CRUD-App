import React, { Component } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';

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
    /*
    handleValidation =(e) => {
        let campusName = '';
        let formIsValid =true;
        let error ={};
        let address ='';
    }
    */

    handleChange =(e) => {
        e.preventDefault(); 
        this.setState ( {[e.target.name]:e.target.value});   
    }

    handleSubmit=async (e) => {
        e.preventDefault();
        const campus = await axios.post(
          'http://localhost:8080/routes/campus/',
          this.state
        );
      }



  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Campus Name:
              <input
                onChange={this.handleChange}
                type="text"
                name="firstName"
                value={this.state.campusName}
              />
            </label>
            <label>
              Campus Address:
              <input
                type="text"
                name="lastName"
                onChange={this.handleChange}
                value={this.state.address}
              />
            </label>
            <label>
              Campus Image Url:
                <input
                  type="text"
                  name="pokeTypes"
                  onChange={this.handleChange}
                  value={this.state.campusImageUrl}
                />
            </label>
            <label>
                Description:
                <input
                  type="text"
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.campusName}
                />
              </label>
            <input type="submit" value="Submit" />       
          </form>
        </div>
       )
   }
} ;


// Type check props;
AddCampusContainer.propTypes = {
    campusName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    campusImageUrl: PropTypes.string,
    description: PropTypes.string
};

// Export our store-connected container by default;
export default AddCampusContainer;