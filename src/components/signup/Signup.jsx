import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Google from '../../assets/google.svg';
import Outlook from '../../assets/outlook.svg';

function Signup() {
  return (
    <div className='signup auth'>
        <Container>
            <div className="auth-container">
            <h3 className='mb-4'>Sign Up</h3>
            <form className='d-flex flex-wrap justify-content-between'>
                <div className="input-container">
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='Enter your First Name' />
                </div>
                <div className="input-container">
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Enter your Last Name' />
                </div>
                <div className="input-container">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="input-container">
                    <label htmlFor="">Password</label>
                    <input type="password"  placeholder='Enter your password' />
                </div>
                <div className="input-buttons d-flex flex-column align-items-center mt-2 w-100">
                    <button className='button button-fill mb-2'>Sign Up</button>
                    <span className='mx-md-4'>or</span>
                    <Link to='/'>Sign In</Link>
                </div>
                <span className='mt-4 line'></span>
                <div className="buttons w-100 mt-4">
                    <button className='button'><img src={Google} alt='google' /> Sign in with Google</button>
                    <button className='button'><img src={Outlook} alt='outlook' /> Sign in with Outlook</button>
                </div>
            </form>
            </div>
        </Container>
    </div>
  )
}

export default Signup