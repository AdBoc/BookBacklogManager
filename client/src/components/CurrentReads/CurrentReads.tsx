import React from 'react';
import { useSelector } from 'react-redux';

const CurrentReads = () => {
  const store = useSelector(store => store);

  return (
    <div>Current Reads</div>
  )
}

export default CurrentReads;

// import React, { useContext } from 'react';
// import { themeContext } from '../../contexts/themeContext';
// import { connect } from 'react-redux';

// const CurrentReads = ({ booksList }: any) => {
//   const value = useContext(themeContext);

//   console.log(booksList);

//   return (
//     <>
//       <div>Current Reads</div>
//       <div>Current Theme: {value}</div>
//     </>
//   )
// }

// const mapStateToProps = (state: any) => {
//   return { booksList: state };
// }

// export default connect(mapStateToProps)(CurrentReads);