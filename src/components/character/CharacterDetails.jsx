import React from 'react';
import { useParams } from 'react-router-dom';

export const CharacterDetails = () => {
  const { id } = useParams();
  return (
    <h1>{id}</h1>
  );
};
