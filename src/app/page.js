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

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="px-0 sm:px-60">
        <SearchBar />
        <Overview />
        <About />
        <Rooms />
        <Accessbility />
        <Policies />
        <Information />
        <FAQ/>
        <Rating/>
        <Further/>
      </div>
        <Footer />
    </>
  );
}
