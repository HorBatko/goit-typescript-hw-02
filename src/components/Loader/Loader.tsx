import React from 'react';
import { Audio } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div>
      <Audio
        height={80}
        width={80}
        radius={9}
        color="blue"
        ariaLabel="loading"
        wrapperStyle={{}} 
      />
      <p>Loading data, please wait...</p>
    </div>
  );
};

export default Loader;
