import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Groups = () => {
  const location = useLocation();
  const data = useSelector((state) => state.data.data);
  console.log(data);

  return (
    <div>
      <h1>This is a group page</h1>
      
    </div>
  );
};

export default Groups;
