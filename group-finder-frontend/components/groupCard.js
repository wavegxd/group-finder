import React from 'react';

import CardStyle from './styles/CardStyle';

const GroupCard = ({ group }) => (
  <CardStyle>
    <h3>{group.title}</h3>
    <p>{group.description}</p>
    <p>{`Location: ${group.location}`}</p>
    <p>{`Group has ${group.currentSize}/${group.maxSize}`}</p>
    <p>{`Group hosted by: ${group.createdBy}`}</p>
  </CardStyle>
);

export default GroupCard;
