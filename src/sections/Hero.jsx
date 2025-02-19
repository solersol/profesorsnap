import { bannerMain } from "../assets/images";

const Hero = () => {
  return (
    <section id="home" className="w-full flex flex-col justify-center items-center min-h-screen gap-10 pt-32 p-2">
      <h1 className="flex justify-center font-anton text-[70px] mb-0">$SNAP</h1>
      <h2 className="flex justify-center font-anton text-[22px] mt-[-40px] mb-10 text-white"> $SNAP OG SOLANA TEACHER</h2>
      <div className="w-full mx-16">
        <img src={bannerMain} alt="banner" className="w-full" />
      </div>
      <h1 className="flex justify-center font-anton text-[35px] mb-10 mt-16">CA: 7eVezzYBgDZ2pyLr33YXV682pBMnjeSqYLRcsBw5s5F6</h1>
    </section>
  );
};

export default Hero;
