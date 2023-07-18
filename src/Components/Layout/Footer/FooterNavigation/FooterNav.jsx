import PropTypes from "prop-types";

const FooterNav = ({ title, items }) => {
  return (
    <div className="text-center md:text-left">
      <h3 className="pb-3 font-bold text-white">{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.url}
              className="text-sm transition-all text-neutral-gray-violet hover:text-primary-cyan"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

FooterNav.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default FooterNav;
