import React from 'react';

const ErrorNotRegister = ({message})=> {
  
    return ( 
        <div
        className="alert alert-primary d-flex justify-content-center"
        role="alert"
      >
       {message}
      </div>
     );
}

export default ErrorNotRegister;