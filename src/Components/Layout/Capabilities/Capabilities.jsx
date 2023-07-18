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
      <div className="absolute inset-x-0  h-2 transform rotate-90 md:rotate-0 top-60 bg-primary-cyan mt-[300px] md:mt-0 mr-5"></div>
      <div className="relative flex flex-col gap-3 pt-32 pb-32 md:flex-row">
        <CapabilitiesViewer items={capabilitiesList} />
      </div>
    </div>
  );
};

export default Capabilities;
