import React from "react";
import image from "../../../public/assets/download.jpg";
import SimilarCard from "./SimilarCard";

const SimilarProperties = () => {
  const properties = [
    {
      name: "Aliante Casino & Hotel",
      location: "Aliante Sun City",
      description: "Travelers love the clean rooms here",
      amenities: ["Pool", "Hot Tub", "Spa"],
      rating: 8.8,
      reviewSummary: "Excellent",
      reviews: 1302,
      pricePerNight: 210,
      totalPrice: 555,
      image: image,
    },
    {
      name: "The Venetian Resort",
      location: "Las Vegas Strip",
      description: "Luxury experience with world-class amenities",
      amenities: ["Pool", "Casino", "Spa"],
      rating: 9.2,
      reviewSummary: "Superb",
      reviews: 2431,
      pricePerNight: 320,
      totalPrice: 820,
      image: image,
    },
    {
      name: "Caesars Palace",
      location: "Las Vegas Boulevard",
      description: "Iconic stay with stunning architecture",
      amenities: ["Pool", "Nightclub", "Spa"],
      rating: 9.0,
      reviewSummary: "Excellent",
      reviews: 4000,
      pricePerNight: 299,
      totalPrice: 760,
      image: image,
    },
    {
      name: "MGM Grand Hotel",
      location: "The Strip, Las Vegas",
      description: "Perfect for travelers looking for excitement",
      amenities: ["Casino", "Pool", "Theater"],
      rating: 8.5,
      reviewSummary: "Very Good",
      reviews: 3200,
      pricePerNight: 220,
      totalPrice: 590,
      image: image,
    },
    {
      name: "Bellagio Hotel",
      location: "Las Vegas Strip",
      description: "Famous for its fountains and luxury stay",
      amenities: ["Fountain View", "Casino", "Spa"],
      rating: 9.5,
      reviewSummary: "Exceptional",
      reviews: 5500,
      pricePerNight: 450,
      totalPrice: 1200,
      image: image,
    },
    {
      name: "Wynn Las Vegas",
      location: "Wynn Boulevard",
      description: "A luxurious experience with a modern touch",
      amenities: ["Golf Course", "Pool", "Casino"],
      rating: 9.3,
      reviewSummary: "Superb",
      reviews: 2900,
      pricePerNight: 375,
      totalPrice: 980,
      image: image,
    },
    {
      name: "Paris Las Vegas",
      location: "The Strip",
      description: "A French-themed casino hotel with charm",
      amenities: ["Eiffel Tower", "Pool", "Spa"],
      rating: 8.7,
      reviewSummary: "Great",
      reviews: 2100,
      pricePerNight: 260,
      totalPrice: 710,
      image: image,
    },
    {
      name: "Cosmopolitan of Las Vegas",
      location: "Las Vegas Strip",
      description: "Trendy and stylish with breathtaking views",
      amenities: ["Rooftop Pool", "Nightclub", "Spa"],
      rating: 9.1,
      reviewSummary: "Excellent",
      reviews: 3100,
      pricePerNight: 350,
      totalPrice: 950,
      image: image,
    },
  ];

  return (
    <div className="overflow-x-auto flex-nowrap whitespace-nowrap no-scrollbar">
      <div className="flex space-x-4">
        {properties.map((property, index) => (
          <SimilarCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProperties;
