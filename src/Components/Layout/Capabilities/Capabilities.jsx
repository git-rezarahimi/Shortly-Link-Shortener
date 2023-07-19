import CapabilitiesViewer from "./CapabilityViewer";
import BrandRecognitionIcon from "../../../assets/images/BrandRecognitionIcon";
import DetailedRecordsIcon from "../../../assets/images/DetailedRecordsIcon";
import FullyCustomizableIcon from "../../../assets/images/FullyCustomizableIcon";

const Capabilities = () => {
  // Data for rendering a list of app capabilities in the UI
  const capabilitiesList = [
    {
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      icon: <BrandRecognitionIcon />,
    },
    {
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      icon: <DetailedRecordsIcon />,
    },
    {
      title: "Fully Customizable",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      icon: <FullyCustomizableIcon />,
    },
  ];

  // Render the list of app capabilities
  return (
    <div className="relative mx-9">
      <div className="flex flex-col items-center text-center">
        <h1 className="py-5 text-2xl font-bold md:text-4xl text-neutral-dark-blue">
          Advanced Statistics
        </h1>
        <p className="text-neutral-gray-violet max-w-[500px] text-center pb-20">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="absolute inset-x-0 hidden h-2 mr-5 transform rotate-90 md:block mt-44 md:rotate-0 top-60 bg-primary-cyan"></div>
      <div className="relative flex-none gap-3 pt-10 pb-10 overflow-hidden sm:flex-col sm:flex md:flex-row">
        <CapabilitiesViewer items={capabilitiesList} />
      </div>
    </div>
  );
};

export default Capabilities;
