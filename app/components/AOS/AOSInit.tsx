"use client";
// -Aos-
import AOS from "aos";
import "aos/dist/aos.css"; // DON'T FORGET IMPORTING "aos.css"
// -React-
import { useLayoutEffect } from "react";

const AOSInit = () => {
  useLayoutEffect(() => {
    AOS.init({ once: false, offset: 0, duration: 2000 });
  }, []);
  return <></>;
};

export default AOSInit;
