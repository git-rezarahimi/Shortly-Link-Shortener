import Button from "./../../UI/Button";

const FooterHero = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center bg-right bg-no-repeat lg:bg-center bg-primary-dark-violet lg:bg-boost-link-desktop-pattern bg-boost-link-mobile-pattern">
      <h1 className="pt-12 pb-6 text-2xl font-bold text-white md:text-4xl">
        Boost your links today
      </h1>
      <Button
        title="Get Started"
        classes="inline-block px-12 py-5 lg:px-6 lg:py-2 rounded-full hover:bg-primary-cyan-light"
      />
    </div>
  );
};

export default FooterHero;
