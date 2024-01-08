import React from 'react';
import "./CheckBox.css";

const CheckBox = () => {
  return (
    <label className="container">
      <input type="checkbox" defaultChecked={false} />
      <span className="checkmark"></span>
    </label>
  );
};

export default CheckBox;
