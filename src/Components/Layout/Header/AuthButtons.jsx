import Button from "../../UI/Button";

const AuthButtons = () => {
  return (
    <div className="hidden mr-8 ems-center lg:flex">
      <button className="px-3 py-3 pl-3 transition-all text-slate-400 hover:text-slate-700">
        Login
      </button>
      <Button title="Sign Up" classes="px-3 py-2 pl-3 rounded-full" />
    </div>
  );
};

export default AuthButtons;
