import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";

const CapabilitiesViewer = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={uuid()}
          className="relative flex flex-col items-center min-h-full px-8 pt-16 mr-5 text-center transition-all bg-white rounded-sm shadow-sm hover:shadow-md md:text-left md:items-start"
          style={{ top: `${index * 50}px` }}
        >
          <div
            className="absolute inset-x-0 h-2 transform rotate-90 md:hidden bg-primary-cyan"
            style={{ zIndex: "-1" }}
          ></div>

          <div className="absolute inset-x-0 flex items-center justify-center w-20 h-20 mx-auto rounded-full lg:inset-auto -top-10 bg-primary-dark-violet lg:-top-10 lg:left-5">
            {item.icon}
          </div>

          <h1 className="z-20 pb-3 text-xl font-bold text-left text-neutral-dark-blue">
            {item.title}
          </h1>
          <p className="pb-20 break-word max-w-[377px] whitespace-normal text-sm leading-7 text-neutral-gray-violet md:text-left text-center">
            {item.description}
          </p>
        </div>
      ))}
    </>
  );
};

CapabilitiesViewer.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CapabilitiesViewer;
