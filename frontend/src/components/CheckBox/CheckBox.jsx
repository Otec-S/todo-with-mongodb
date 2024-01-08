// import React from 'react';
// import "./CheckBox.css";

// const CheckBox = () => {
//   return (
//     <label className="container">
//       <input type="checkbox" defaultChecked={false} />
//       <span className="checkmark"></span>
//     </label>
//   );
// };

// export default CheckBox;

import React from 'react';
import "./CheckBox.css";

const CheckBox = ({ onChange }) => {
  return (
    <label className="container">
      <input type="checkbox" onChange={onChange} />
      <span className="checkmark"></span>
    </label>
  );
};


export default CheckBox;

