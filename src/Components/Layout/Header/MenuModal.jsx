const MenuModal = () => {
  return (
    <div className="absolute inset-x-0 z-10 w-10/12 mx-auto rounded-xl bg-primary-dark-violet lg:hidden top-30">
      <div className="flex flex-col text-center">
        <a
          href="#"
          className="py-5 pl-3 mx-10 font-bold text-white transition-all mpx-3 hover:text-neutral-light-gray lg:inline-block"
        >
          Features
        </a>
        <a
          href="#"
          className="px-3 py-5 pl-3 mx-10 font-bold text-white transition-all hover:text-neutral-light-gray lg:inline-block"
        >
          Pricing
        </a>
        <a
          href="#"
          className="px-3 py-5 pl-3 mx-10 font-bold text-white transition-all hover:text-neutral-light-gray lg:inline-block"
        >
          Resources
        </a>
        <a
          href="#"
          className="px-3 py-5 pl-3 mx-10 font-bold text-white transition-all hover:text-neutral-light-gray lg:inline-block"
        >
          Login
        </a>
        <a
          href="#"
          className="px-3 py-2 pl-3 mx-10 my-2 font-bold text-white transition-all rounded-3xl hover:text-neutral-light-gray lg:inline-block bg-primary-cyan hover:bg-primary-cyan-light"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default MenuModal;
