import HeroImage from "../../../assets/images/HeroImage";
import Button from "../../UI/Button";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center overflow-hidden justify-a lg:flex-row lg:py-0 ">
      <div className="text-center lg:text-left ">
        <p className="font-bold text-hero lg:ml-10 text-neutral-dark-blue ">
          More than just shorter links
        </p>
        <p className="px-12 my-5 leading-8 text-neutral-gray ">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button
          title="Get Started"
          classes="inline-block px-12 py-5 lg:ml-10 lg:px-6 lg:py-2 rounded-full hover:bg-primary-cyan-light"
        />
      </div>
      <HeroImage />
    </div>
  );
};

export default Hero;
