import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            Error 
           <button className='btn'>
           <Link t='/'>Back to home page</Link>
           </button>
        </div>
    );
};

export default ErrorPage;