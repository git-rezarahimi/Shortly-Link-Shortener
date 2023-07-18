import PropTypes from "prop-types";

const UrlInputForm = ({ inputUrl, onUrlChange, isValidUrl }) => {
  const inputClasses = {
    default:
      "w-full px-5 py-3 border-4 rounded-md focus:outline-none lg:w-11/12 lg:ml-14 lg:mr-5",
    invalid: "border-red-500",
  };

  return (
    <div className="pr-0 mx-6 w-4/4 lg:pr-5 lg:mx-0 lg:w-8/12">
      <input
        type="text"
        placeholder="Shorten a link here..."
        value={inputUrl}
        onChange={onUrlChange}
        className={`${inputClasses.default} ${
          !isValidUrl && inputClasses.invalid
        }`}
      />
      {!isValidUrl && (
        <small className="pl-6 text-sm text-red-500 lg:pl-14 min-h-max">
          Please enter a valid URL!
        </small>
      )}
    </div>
  );
};

UrlInputForm.propTypes = {
  inputUrl: PropTypes.string.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  isValidUrl: PropTypes.bool.isRequired,
};

export default UrlInputForm;
