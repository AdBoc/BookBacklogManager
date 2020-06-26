import React, { useContext } from 'react';
import { themeContext } from '../../contexts/themeContext';
import { connect } from 'react-redux';

const CurrentReads = (props: any) => {
  const value = useContext(themeContext);

  return (
    <>
      <div>Current Reads</div>
      <div>Current Theme: {value}</div>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    book: state
  }
}

export default connect(mapStateToProps)(CurrentReads);


// import React, { useState, useEffect, useLayoutEffect } from 'react';

// const CurrentReads = () => {
//     const [size, setSize] = useState([0, 0]);
//     useLayoutEffect(() => {
//         function updateSize() {
//             setSize([window.innerWidth, window.innerHeight]);
//         }
//         window.addEventListener('resize', updateSize);
//         updateSize();
//         return () => window.removeEventListener('resize', updateSize);
//     }, []);

//     console.log(size);

//     return (
//         <div>AA</div>
//     )
// }

// export default CurrentReads;