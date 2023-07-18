import { useState } from "react";
import PropTypes from "prop-types";
import { UrlValidation } from "../../../utils";
import UrlInputForm from "./UrlInputForm";
import LoadingButton from "../../../assets/images/LoadingButton";
import Button from "../../UI/Button";

const UrlForm = ({ onUrlSubmit, isLoading }) => {
  const [inputUrl, setInputUrl] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const validation = UrlValidation(inputUrl);
    setIsValidUrl(validation);

    const validationResult = {
      isValidated: validation,
      inputUrl,
    };

    /* Sends Object Data to LinkShortener */
    onUrlSubmit(validationResult);
  };

  const handleUrlChange = (event) => {
    setInputUrl(event.target.value);
  };

  return (
    <form
      className="relative flex flex-col w-9/12 py-8 mx-auto bg-right-top bg-no-repeat rounded-lg mb-28 top-20 z-1 lg:bg-cover md:bg-bottom-left lg:justify-center lg:flex-row lg:bg-shorten-box-desktop-pattern bg-shorten-box-mobile-pattern lg:py-12 xl:py-14 bg-primary-dark-violet"
      onSubmit={handleSubmit}
    >
      <UrlInputForm
        inputUrl={inputUrl}
        onUrlChange={handleUrlChange}
        isValidUrl={isValidUrl}
      />
      <Button
        title={!isLoading ? "Shorten It!" : ""}
        type="submit"
        classes="lg:self-start lg:mr-8 lg:ml-0 mx-6 my-1.5 lg:my-0 py-4 lg:px-5 flex items-center justify-center font-bold text-white transition-all rounded-md lg:w-3/12 xl:w-2/12 hover:bg-primary-cyan-light bg-primary-cyan xl:mr-14"
      >
        {isLoading && <LoadingButton />}
      </Button>
    </form>
  );
};

UrlForm.propTypes = {
  onUrlSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default UrlForm;
