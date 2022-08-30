import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#e92444]"></div>
    </div>
  );
};

export default LoadingSpinner;
