import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./../UI/Button";

const ShortLinksListItem = ({ link }) => {
  const [isCopy, setIsCopy] = useState(false);

  /* Copies the short link to the clipboard */
  const copyLink = (link) => {
    navigator.clipboard.writeText(link);

    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center w-9/12 gap-3 px-5 py-5 mx-auto my-2 bg-white rounded-lg shadow-sm md:flex-row ">
      <p className="w-full break-all">{link.inputUrl}</p>
      <p className=" text-primary-cyan">{link.shortUrl}</p>
      <Button
        title={isCopy ? "Copied" : "Copy"}
        classes="w-full md:md:w-min px-6 py-2 rounded-md"
        onClick={() => copyLink(link.shortUrl)}
      />
    </div>
  );
};

ShortLinksListItem.propTypes = {
  link: PropTypes.object.isRequired,
};

export default ShortLinksListItem;
