import React, { useContext } from 'react';
import { themeContext } from '../../contexts/themeContext';

const CurrentReads = () => {
  const value = useContext(themeContext);

  return (
    <div>Current Reads</div>
  )
}

export default CurrentReads;


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