import NavComponent from "./Navbar/NavComponent";
import HeroSection from "./HeroSection/HeroSection";
import SuccessStory from "./SuccessStory/SuccessStory";
import Payment from "./payment/Payment";
import Action from "../action/Action";
import Works from "../work/Works";
import WatchAction from "../watchAction/WatchAction";
import Footer from "../Footer/Footer";
import { useEffect, useRef, useState } from "react";

const LandingPageMain = () => {
  const heroRef = useRef(null);
  const worksRef = useRef(null);
  const paymentRef = useRef(null);
  const [activeSection, setActiveSection] = useState("demo");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const scrollToSection = (sectionName, section) => {
    setActiveSection(sectionName);
    section?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <NavComponent
        {...{ scrollToSection, heroRef, worksRef, paymentRef, activeSection }}
      />
      <div className="md:pt-24">
        <div ref={heroRef}>
          <HeroSection />
        </div>
        <Action />
        <div ref={worksRef}>
          <Works />
        </div>
        <WatchAction />
        <div ref={paymentRef}>
          <Payment />
        </div>
        <SuccessStory />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPageMain;
