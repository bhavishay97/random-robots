import React from 'react';
import '../App.css';

const Scroll = (props) => {
  return (
    <div className='row justify-content-center scroll'>{props.children}</div>
  );
};

export default Scroll;
