import PropTypes from "prop-types";

const Button = ({
  title = "",
  classes,
  type = "button",
  children,
  ...props
}) => {
  const defaultClasses =
    "font-bold text-white transition-all bg-primary-cyan hover:bg-primary-cyan-light";
  const classNames = defaultClasses + " " + classes;

  return (
    <button className={classNames} type={type} {...props}>
      {title}
      {children}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
