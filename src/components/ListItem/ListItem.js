import React from 'react';

export const ListItem = ({item}) => {
  return <li>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
      <p>{item.createdAt}</p>
  </li>;
};
