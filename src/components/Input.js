import React from 'react';

const Input = ({ id, value, onChange }) => {
  return (
    <input
      type="number"
      id={id}
      style={{ width: 300, height: 35 }}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
