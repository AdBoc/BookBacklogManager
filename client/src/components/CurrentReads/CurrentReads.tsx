import React from 'react';
import { useSelector } from 'react-redux';

const CurrentReads = () => {
  const bookArray = useSelector(store => store);

  return (
    <>
      <div>Current Reads</div>
    </>
  )
}

export default CurrentReads;
//make special array with only currently read books to avoid sorting it every time?
