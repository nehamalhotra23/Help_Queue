import React from 'react';

const buttonStyles = {
  backgroundColor: '#1d521f',
  borderRadius: '15px',
  buttonBorder: '2px solid white',
  color: 'white',
  fontSize: '20px'
};

function NewTicketForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit' style= {buttonStyles}>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;