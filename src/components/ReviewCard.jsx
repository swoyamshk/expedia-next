import React from 'react';

const ReviewCard = ({ rating, comment, name, date }) => {
  return (
    <div className="w-52 sm:w-64 flex-shrink-0 rounded-lg border border-gray-200 p-4 bg-white shadow-sm">
      <div className="font-bold text-lg mb-1">{rating}/10 Excellent</div>
      <p className="text-gray-800 mb-2">{comment}</p>
      <a href="#" className="text-blue-500 hover:underline text-sm block mb-4">See more</a>
      
      <div className="mt-2">
        <div className="font-medium">{name}</div>
        <div className="text-gray-600 text-sm">{date}</div>
      </div>
    </div>
  );
};

const ReviewCards = () => {
  // Static review data
  const reviews = [
    { id: 1, rating: 10, comment: 'Very good place to stay', name: 'Ana', date: 'Mar 13, 2025' },
    { id: 2, rating: 9, comment: 'Comfortable rooms and excellent service', name: 'Michael', date: 'Feb 28, 2025' },
    { id: 3, rating: 10, comment: 'Clean, quiet, and well-located. Would definitely stay again!', name: 'Sarah', date: 'Feb 15, 2025' },
    { id: 4, rating: 8, comment: 'Great amenities but the WiFi was a bit slow', name: 'David', date: 'Jan 30, 2025' },
    { id: 5, rating: 10, comment: 'Perfect location for sightseeing and shopping', name: 'Emma', date: 'Jan 22, 2025' },
    { id: 6, rating: 9, comment: 'Friendly staff and beautiful rooms', name: 'James', date: 'Jan 10, 2025' }
  ];

  return (
    <div className="mx-5 w-full max-w-2xl sm:mx-auto">
      <h2 className="text-2xl font-bold mb-6">Guest Reviews</h2>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} rating={review.rating} comment={review.comment} name={review.name} date={review.date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
