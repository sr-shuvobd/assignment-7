import Hero from "./Hero";
import Card from "./Card";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Hero></Hero>
      <div className="divider"></div>
      <Suspense fallback={<div className="flex justify-center items-center p-20 shadow rounded-2xl">
        <span className="loading loading-spinner text-error p-10"></span>
      </div>
        }>
        <Card />
      </Suspense>
    </div>
  );
};

export default HomePage;
