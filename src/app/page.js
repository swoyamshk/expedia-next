import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import About from "../components/About";
import Rooms from "../components/Rooms";
import Accessbility from "../components/Accessbility";
import Policies from "../components/Policies";
import SearchBar from "../components/SearchBar";
import Information from "../components/Information";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="px-60">
        <SearchBar />
        <Overview />
        <About />
        <Rooms />
        <Accessbility />
        <Policies />
        <Information />
      </div>
    </>
  );
}
