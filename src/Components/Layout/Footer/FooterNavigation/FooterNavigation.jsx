import LogoIcon from "@/assets/images/LogoIcon";
import FacebookIcon from "@/assets/images/FacebookIcon";
import TwitterIcon from "@/assets/images/TwitterIcon";
import InstagramIcon from "@/assets/images/InstagramIcon";
import PinterestIcon from "@/assets/images/PinterestIcon";
import FooterNav from "./FooterNav";

const FooterNavigation = () => {
  const featuresTitle = "Features";
  const features = [
    { id: 1, url: "#", label: "Link Shortening" },
    { id: 2, url: "#", label: "Branded Links" },
    { id: 3, url: "#", label: "Analytics" },
  ];

  const resourcesTitle = "Resources";
  const resources = [
    { id: 1, url: "#", label: "Blog" },
    { id: 2, url: "#", label: "Developers" },
    { id: 3, url: "#", label: "Support" },
  ];

  const companyTitle = "Company";
  const company = [
    { id: 1, url: "#", label: "About" },
    { id: 2, url: "#", label: "Our Team" },
    { id: 3, url: "#", label: "Careers" },
    { id: 4, url: "#", label: "Contact" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-20 py-8 bg-neutral-dark-violet md:flex-row md:justify-center md:items-start md:gap-8 lg:gap-20">
      <div className="flex justify-start">
        <LogoIcon display="hidden md:inline-block" fill="#FFF" />
      </div>

      <FooterNav title={featuresTitle} items={features} />
      <FooterNav title={resourcesTitle} items={resources} />
      <FooterNav title={companyTitle} items={company} />

      <div className="flex flex-row flex-wrap gap-20 pt-2 md:gap-3">
        <div>
          <FacebookIcon />
        </div>
        <div>
          <PinterestIcon />
        </div>
        <div>
          <TwitterIcon />
        </div>
        <div>
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default FooterNavigation;
