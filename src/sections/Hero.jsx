import React, { Suspense, lazy } from "react";
import Button from "../components/Button";
// import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const HeroExperience = lazy(() =>
  import("../components/models/HeroModels/HeroExperience")
);

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">

              <h1>Software Engineer</h1>
              <h1>AI Insights & Product Growth</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I am Hyun, a developer based in New York 🗽
            </p>

            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See My Work"
            />
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout">
            <Suspense fallback={<div style={{ height: 420 }} />}>
              <HeroExperience />
            </Suspense>
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
