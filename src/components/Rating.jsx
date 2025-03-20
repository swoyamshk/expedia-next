import React from 'react'
import ReviewCards from './ReviewCard'

const Rating = () => {
    return (
      <div className="flex w-full mt-10">
        <div className="m-5 sm:m-0 w-86 flex-shrink-0 space-y-2">
          <h1 className="text-6xl font-normal text-green-800">8.0/10</h1>
          <h3>Very Good</h3>
          <h4>4,403 verified Reviews</h4>
        </div>
        <div className=''>
          <ReviewCards />
        </div>
      </div>
    );
  };
  
  

export default Rating