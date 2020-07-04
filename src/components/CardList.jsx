import React from 'react';
import Message from './Message';
import Card from './Card';

const CardList = ({ robots }) => {
  if (robots.length === 0)
    return <Message text={'No results match your search query'} size={'h5'} />;

  return (
    <React.Fragment>
      {robots.map((robot) => {
        return <Card key={robot.id} robot={robot} />;
      })}
    </React.Fragment>
  );
};

export default CardList;
