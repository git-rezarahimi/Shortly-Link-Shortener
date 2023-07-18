import PropTypes from "prop-types";

const MobileMenuIcon = ({ onClick }) => {
  return (
    <a
      href="#"
      className="inline-block mr-8 transition-all rounded-3xl lg:hidden"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-neutral-gray-violet"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        data-v-565d4e41=""
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </a>
  );
};

MobileMenuIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MobileMenuIcon;
