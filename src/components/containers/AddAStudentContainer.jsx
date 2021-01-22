import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SingleStudentView } from '../views';
import axios from 'axios';


class AddAStudentContainer extends Component {
    constructor (props){
        super(props);
        this.state = {
            firstName: '',  
            lastName: '',
            gpa: '',
            email: '',
            imageUrl: '',
            campusName: '',
        };
    }

    handleChange =(e) => {
      e.preventDefault(); 
      this.setState ( {[e.target.name]:e.target.value});   
    }  

    handleValidation =(e) => {
      let firstName = '';
      let lastName = '';
      let formIsValid =true;
      let error ={};
      let email ='';
  }

    handleSubmit=async (e) => {
      e.preventDefault();
      const singleStudent = await axios.post(
        //to add newStudent after student/, need to add newStudent after '/' in app.post funcition
        //in student.js file inside routes folder 
        'http://localhost:8080/routes/student/',
        this.state
      );
    }


  render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              First Name:
              <input
                onChange={this.handleChange}
                type="text"
                name="firstName"
                value={this.state.firstName}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                onChange={this.handleChange}
                value={this.state.lastName}
              />
            </label>
            <label>
                GPA:
              <input
                type="text"
                name="gpa"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </label>
              <label>
                Email:
                <input
                  type="text"
                  name="pokeTypes"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
            </label>
            <label>
              Student Photo Url:
                <input
                  type="text"
                  name="pokeTypes"
                  onChange={this.handleChange}
                  value={this.state.imageUrl}
                />
            </label>
            <label>
                Campus Name:
                <input
                  type="text"
                  name="campusName"
                  onChange={this.handleChange}
                  value={this.state.campusName}
                />
              </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
};

// Type check props;
AddAStudentContainer.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

// Export our store-connected container by default;
export default AddAStudentContainer;
