import React from 'react';

const FormInput = ({title, onChange}) => (
  <div className={title + "-div"}>
    <label className="form-label">{title}</label>
    <input type="text" name={title} onChange={onChange} />
  </div>
);

export default FormInput;
