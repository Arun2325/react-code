import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link >
      <button  className='btn'>Staff Login</button>
    </Link>
  );
}
