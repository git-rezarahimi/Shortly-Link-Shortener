import HeaderHeroSection from "./Components/Layout/Header/HeaderHeroSection";
import LinkShortener from "./Components/ShortenLink/LinkShortener";
import Capabilities from "./Components/Layout/Capabilities/Capabilities";
import Footer from "./Components/Layout/Footer/Footer";

function App() {
  return (
    <>
      <div className="container relative mx-auto mb-52">
        <HeaderHeroSection />
      </div>
      <div className="relative z-10 pb-10 bg-neutral-light-gray ">
        <LinkShortener />
        <Capabilities />
      </div>
      <Footer />
    </>
  );
}

export default App;
