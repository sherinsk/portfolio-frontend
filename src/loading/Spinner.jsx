import React from 'react';

const Spinner = () => {
  return (
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-e-transparent"
      role="status"
    />
  );
};

export default Spinner;
