import React from 'react';
import loaderImage from './assets/loader.gif';


const Spinner =() => {

    return (
      <div className='text-center'>
        <img src={loaderImage} alt="loading" />
      </div>
    )
  }

  export default Spinner
