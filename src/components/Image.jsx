import React from 'react';
import clippy from '../assets/images/clippy.png';

const myStyledImageStyles = {
  borderRadius: '8px',
  maxWidth: '25%',
  height: 'auto',
  float: 'right',
  margin: '10px',
  border: '4px solid #1d521f'
};

function myStyledImage() {

  return (
    <div>
      <img src={clippy} style={myStyledImageStyles}/>
    </div>
  );
}

export default myStyledImage;