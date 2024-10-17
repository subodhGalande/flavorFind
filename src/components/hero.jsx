import HeroCard from "./heroCards";

const Hero = () => {
  return (
    <div className="hidden h-[calc(100vh-76px)] w-screen sm:block">
      <HeroCard />
    </div>
  );
};

export default Hero;
