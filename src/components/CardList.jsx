import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <React.Fragment>
      {robots.map((robot) => {
        return <Card key={robot.id} robot={robot} />;
      })}
    </React.Fragment>
  );
};

export default CardList;
