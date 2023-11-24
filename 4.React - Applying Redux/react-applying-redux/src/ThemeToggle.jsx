import React from 'react';
import { useAppContext } from './AppContext';
import { MDBIcon } from 'mdb-react-ui-kit';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useAppContext();

    return (
        <>
            <div className='m-2'>
                <button className='toggleButton' onClick={toggleTheme}>
                    {theme === 'dark' ? <MDBIcon className='ms-1 border' icon="moon" size='2x' /> : <MDBIcon fas icon="sun" size='2x'/>}
                </button>
            </div>
        </>
    );
};

export default ThemeToggle;
