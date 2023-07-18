import Button from "../../UI/Button";

const AuthButtons = () => {
  return (
    <div className="items-baseline hidden mr-8 lg:flex">
      <button className="mr-3 transition-all text-slate-400 hover:text-slate-700">
        Login
      </button>
      <Button
        title="Sign Up"
        classes="px-3 py-2 pl-3  my-2 font-bold text-white transition-all mb-9 rounded-3xl hover:text-neutral-light-gray lg:inline-block bg-primary-cyan hover:bg-primary-cyan-light"
      />
    </div>
  );
};

export default AuthButtons;
