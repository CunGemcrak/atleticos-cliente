import React from 'react';
import loadingimg from '../img/final_loading2.gif';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-red-600 bg-opacity-50 flex items-center justify-center z-50">
      <img src={loadingimg} alt="Loading" className="w-24 h-24" />
    </div>
  );
};

export default Loading;
