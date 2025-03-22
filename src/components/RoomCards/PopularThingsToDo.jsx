import React from "react";
import PopularCard from "./PopularCard";

const PopularThingsToDo = ({ activities }) => {
  if (!activities || activities.length === 0) {
    return <div>No activities available.</div>;
  }
  
  return (
    <div className="overflow-x-auto flex-nowrap whitespace-nowrap no-scrollbar">
      <div className="flex space-x-4">
        {activities.map((activity, index) => (
          <PopularCard key={index} activity={activity} />
        ))}
      </div>
    </div>
  );
};


// This function runs at build time to fetch data
export async function getStaticProps() {
  // Static data for activities
  const activities = [
    {
      name: "Skydiving Adventure",
      distance: "5 miles away",
      rating: "9.2/10",
      reviews: 1025,
      price: 250,
      image: "/assets/download.jpg",
    },
    {
      name: "City Sightseeing Tour",
      distance: "0.5 miles away",
      rating: "8.5/10",
      reviews: 800,
      price: 45,
      image: "/assets/download.jpg",
    },
    {
      name: "Helicopter Ride Over City",
      distance: "3 miles away",
      rating: "9.0/10",
      reviews: 620,
      price: 180,
      image: "/assets/download.jpg",
    },
    {
      name: "Wine Tasting Experience",
      distance: "2 miles away",
      rating: "8.7/10",
      reviews: 1500,
      price: 90,
      image: "/assets/download.jpg",
    },
    {
      name: "Spa and Massage Package",
      distance: "1 mile away",
      rating: "9.5/10",
      reviews: 430,
      price: 120,
      image: "/assets/download.jpg",
    },
    {
      name: "Cooking Class with Chef",
      distance: "0.7 miles away",
      rating: "8.9/10",
      reviews: 540,
      price: 75,
      image: "/assets/download.jpg",
    },
    {
      name: "Museum Guided Tour",
      distance: "1.5 miles away",
      rating: "8.2/10",
      reviews: 350,
      price: 35,
      image: "/assets/download.jpg",
    },
    {
      name: "Nightlife Bar Crawl",
      distance: "4 miles away",
      rating: "9.0/10",
      reviews: 970,
      price: 50,
      image: "/assets/download.jpg",
    },
  ];

  // Return the activities as props
  return {
    props: {
      activities,
    },
  };
}

export default PopularThingsToDo;
