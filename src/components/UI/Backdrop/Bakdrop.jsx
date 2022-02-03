import React from 'react';
import './Backdrop.css'
import ReactDOM from 'react-dom'
const BackDrop = () => {
  return ReactDOM.createPortal( <div className='bg_layer'></div>,document.getElementById('backdrop-root'))
};

export default BackDrop;