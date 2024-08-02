import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits.jsx";
import Button from "./components/Button";
import Collaboration from "./components/Collaboration.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
