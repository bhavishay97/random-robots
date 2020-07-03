import React from 'react';

const Card = () => {
  const cardStyles = {
    background: '#9eebcf',
    boxShadow: '4px 4px 8px 0 rgba( 0, 0, 0, 0.2 )',
  };

  return (
    <div className='col-8 col-sm-6 col-md-4 col-lg-3'>
      <div className='card text-center my-2' style={cardStyles}>
        <img
          src='https://robohash.org/1?size=200x200'
          className='card-img-top'
          alt='robot'
        />
        <div className='card-body'>
          <h5 className='card-title'>Robot 1</h5>
          <p className='card-text'>Company: Romaguera-Crona</p>
          <a href='mailto:robo1@domain.com' className='btn btn-outline-dark'>
            Email me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
