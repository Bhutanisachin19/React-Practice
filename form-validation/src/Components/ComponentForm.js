import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Row , Col } from 'react-bootstrap';
import '../App.css';

//import Button from 'react-bootstrap/Button';

import useForm from '../useForm';
import validate from '../validateInfo';

import Messi from './messi.png';

const ComponentForm = ({submitForm}) => {

    const {handleChange , handleSubmit , values ,  errors} = useForm(submitForm , validate);

    return (
        <div >
            <br></br>
            {/* Container fluid */}
            <Container >
                
                <Row className="rows">
                    
                    <Col  className="columns">
                        <img src={Messi}  className="Messi" alt="Image" />
                    </Col>
                    
                    
                    
                    <Col  className="columns">
                        <div className="form-div">

                        <h2>Sign Up Here</h2>
                            
                            <br></br>
                            <br></br>

                                <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                <label htmlfor="username">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    placeholder="Enter Your Full Name"
                                    value={values.username}
                                    onChange={handleChange}
                                />

                                {/* trick to display with && operator */}

                                {errors.username && <p className="warning">{errors.username}</p>}

                                </div>
                                <div className="form-group">
                                <label htmlfor="email">E-mail Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Enter Your E-mail Address"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="warning">{errors.email}</p>}

                                </div>
                                <div className="form-group">
                                <label htmlfor="phone">Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone_number"
                                    name="phone_number"
                                    placeholder="Enter Your Phone Number"
                                    value={values.phone_number}
                                    onChange={handleChange}
                                    
                                />
                                {errors.phone_number && <p className="warning">{errors.phone_number}</p>}

                                </div>
                                <div className="form-group">
                                <label htmlfor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name = "password"
                                    placeholder="Enter Your Password"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <p className="warning">{errors.password}</p>}
                                </div>



                                <div className="form-group">
                                        <label htmlfor="Confirm_password">Confirm Password</label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            id="password2"
                                            name="password2"
                                            placeholder="Enter Your Password Again"
                                            value={values.password2}
                                            onChange={handleChange}
                                            
                                        />
                                {errors.password2 && <p className="warning">{errors.password2}</p>}

                                </div>


                                <div className="form-group">
                                <label htmlfor="gender" className="mr-4">Choose Your Gender</label>
                                <div className="form-check form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    id="male"
                                    value="male"
                                    name="gender"
                                    required
                                    />
                                    <label className="form-check-label" for="male">male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    id="female"
                                    value="female"
                                    name="gender"
                                    required
                                    />
                                    <label className="form-check-label" for="female">female</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    id="other"
                                    value="other"
                                    name="gender"
                                    required
                                    />
                                    <label className="form-check-label" for="other">other</label>
                                </div>
                                </div>
                                <div className="form-group">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="tnc" required />
                                    <label className="form-check-label" for="tnc"
                                    >I agree all terms & conditions</label
                                    >
                                </div>
                                </div>
                                <button className="btn btn-primary">Create New Account</button>
                            </form>

                        </div>
                    
                    </Col>

                </Row>

            </Container >
        
        </div>
    )
}

export default ComponentForm ;