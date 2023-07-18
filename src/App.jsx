import HeaderHeroSection from "./Components/Layout/Header/HeaderHeroSection";
import LinkShortener from "./Components/ShortenLink/LinkShortener";
import Capabilities from "./Components/Layout/Capabilities/Capabilities";
import Footer from "./Components/Layout/Footer/Footer";

function App() {
  return (
    <>
      <div className="mx-auto max-w-7xl ">
        <HeaderHeroSection />
        <LinkShortener />
        <Capabilities />
      </div>
      <Footer />
    </>
  );
}

export default App;
