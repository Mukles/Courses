import React from 'react';

const TextInput = props => {
  const { heading, name, onchange, type, value } = props;
  return (
    <div className='col-md-6 mx-auto my-2'>
      <label htmfor="id" className=' text-left'>{heading}:</label>
      <input type={type} name={name} className="form-control" id='id' placeholder={`Enter ${heading}`} onChange={onchange} required value ={value} />
   </div>
  )
}

export default TextInput;
