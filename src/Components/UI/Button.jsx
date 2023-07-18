import PropTypes from "prop-types";

const Button = ({
  title = "",
  classes,
  type = "button",
  children,
  ...props
}) => {
  const defaultClasses =
    "font-bold text-white bg-primary-cyan transition-all  ";
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
