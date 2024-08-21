import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

export default function Spinning() {
  return (
    <div style={{ display: 'block', width: 1000, padding: 30 }} className='mx-auto'> 
      <Spinner animation="border" variant="primary" /> <br/>
    </div>
  );
}