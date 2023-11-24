import React from 'react';
import { useAppContext } from './AppContext';
import './App.css';

const Content = () => {
    const { theme } = useAppContext();

    return (
        <div className='d-flex justify-content-center'>
            <form style={{ backgroundColor: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#333' }} className=' border rounded-5  text-center p-4' action="" method="post">
                <h3>Log in</h3>
                <label htmlFor="email">Email
                </label> <br />
                <input type="text" name='email' />
                <br />
                <label htmlFor="password">Password
                </label><br />
                <input type="password" name='password' />
                <br />
                <div className="text-center mt-3">
                    <button className='btn btn-primary'>
                        Login
                    </button>

                </div>

                <p className='mt-3 text-center'> ------ OR ------</p>
                <div className="text-center my-3">
                    <button className='btn btn-success'>
                        Create account
                    </button>

                </div>
            </form>
        </div>
    );
};

export default Content;
