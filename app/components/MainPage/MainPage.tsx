  // -React-
  import React from "react";
  // -Components-
  import Header from "@/app/components/Header/Header";
  import HeroTwo from "@/app/components/HeroSection/HeroTwo";
  import Services from "@/app/components/Services/Services";
  import AboutUs from "@/app/components/AboutUs/AboutUs";
  import ContactUs from "@/app/components/ContactUs/ContactUs";
  import Projects from "@/app/components/Projects/Projects";
  import Testimonials from "@/app/components/Testimonials";
  import Articles from "@/app/components/Articles";
  import Footer from "@/app/components/Footer";

  const MainPage = () => {
    return (
      <React.Fragment>
        <Header />
        <div className="relative lg:min-h-screen lg:z-[10]">
          <div className="bg-[#172554] h-[35rem] absolute top-0 left-0 w-full md:h-[25rem] lg:h-[44.8rem]"></div>
          <div className="bg-white h-[15rem] absolute bottom-0 left-0 w-full md:h-[10rem] lg:h-[30.2rem]"></div>
          <div className="flex flex-col items-end relative">
            <HeroTwo />
          </div>
        </div>
        <div className="relative">
          <Services />
          <Testimonials />
          <AboutUs />
          <ContactUs />
          <Projects />
          <Articles />
          <Footer />
        </div>
      </React.Fragment>
    );
  };

  export default MainPage;
