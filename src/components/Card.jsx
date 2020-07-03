import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhoneAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Card = ({ robot }) => {
  const cardStyles = {
    background: '#9eebcf',
    boxShadow: '4px 4px 8px 0 rgba( 0, 0, 0, 0.2 )',
  };

  const footerStyles = {
    background: '#0B3954',
  };

  return (
    <div className='col-8 col-sm-6 col-md-4 col-lg-3'>
      <div className='card text-center my-2' style={cardStyles}>
        <img
          src={`https://robohash.org/${robot.id}?size=200x200`}
          className='card-img-top p-2'
          alt='robot'
        />
        <div className='card-body p-0'>
          <h5 className='card-title'>{robot.name}</h5>
          <p className='card-text'>
            <strong>Works at: </strong>
            {robot.company.name}
          </p>

          <div
            className='card-footer d-flex justify-content-around'
            style={footerStyles}
          >
            <a href={`mailto:${robot.email}`}>
              <FontAwesomeIcon icon={faAt} size='lg' color='white' />
            </a>
            <a href={`tel:${robot.phone}`}>
              <FontAwesomeIcon icon={faPhoneAlt} size='lg' color='white' />
            </a>
            <a href={`https://${robot.website}`}>
              <FontAwesomeIcon icon={faGlobe} size='lg' color='white' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
