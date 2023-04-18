import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Google from '../../assets/google.svg';
import Outlook from '../../assets/outlook.svg';

function Login() {
  return (
    <div className='login auth'>
        <Container>
            <div className="auth-container">
            <h3 className='mb-4'>Sign In</h3>
            <form>
                <div className="input-container">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="input-container">
                    <label htmlFor="">Password</label>
                    <input type="password"  placeholder='Enter your password' />
                </div>
                <div className="input-buttons d-flex flex-column align-items-center mt-2">
                    <Link to='/dashboard' className='button button-fill mb-2'>Sign In</Link>
                    <span className='mx-md-4'>or</span>
                    <Link to='/signup'>Sign up</Link>
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

export default Login