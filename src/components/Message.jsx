import React from 'react';

const Message = ({ text, size }) => {
  return (
    <div className='row m-2'>
      <div className='col text-center'>
        <h1
          className={`title text-white text-uppercase font-weight-bold ${size}`}
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Message;
