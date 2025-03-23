import "../globals.css";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import About from "../components/About";
import Footer from "../components/Footer";
import Rooms from "../components/Rooms";
import Accessbility from "../components/Accessbility";
import Policies from "../components/Policies";
import SearchBar from "../components/SearchBar";
import Information from "../components/Information";
import FAQ from "@/components/FAQ";
import Rating from "@/components/Rating";
import Further from "@/components/Further";
import image from "../../public/assets/hotel.avif";
import hall from "../../public/assets/hall.webp";

export async function getStaticProps() {
    const activities = [
        {
          name: "Skydiving Adventure",
          distance: "5 miles away",
          rating: "9.2/10",
          reviews: 1025,
          price: 250,
          image: image,
        },
        {
          name: "City Sightseeing Tour",
          distance: "0.5 miles away",
          rating: "8.5/10",
          reviews: 800,
          price: 45,
          image: hall,
        },
        {
          name: "Helicopter Ride Over City",
          distance: "3 miles away",
          rating: "9.0/10",
          reviews: 620,
          price: 180,
          image: image,
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
          image: image,
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
    

  console.log("getStaticProps activities:", activities);
  return {
    props: {
      activities,
    },
  };
}

export default function Page({ activities }) {
  return (
    <>
      <Navbar />
      <div className="px-0 sm:px-60">
        <SearchBar />
        <Overview />
        <About />
        <Rooms activities={activities} />
        <Accessbility />
        <Policies />
        <Information />
        <FAQ />
        <Rating />
        <Further />
      </div>
      <Footer />
    </>
  );
}