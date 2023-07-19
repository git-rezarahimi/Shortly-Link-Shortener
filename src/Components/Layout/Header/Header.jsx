import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import LogoIcon from "../../../assets/images/LogoIcon";
import NavMenu from "./NavMenu";
import AuthButtons from "./AuthButtons";
import MobileMenuIcon from "../../../assets/images/MobileMenuIcon";
import MenuModal from "./MenuModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex items-baseline justify-between py-7">
        <div className="flex items-center">
          <LogoIcon />
          <NavMenu />
        </div>
        <AuthButtons />
        <MobileMenuIcon onClick={toggleMenu} />
      </nav>

      {/* Renders a menu modal component with animation when isMenuOpen is true. */}
      <TransitionGroup>
        {isMenuOpen && (
          <CSSTransition classNames="flip" timeout={3000}>
            <MenuModal />
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
};

export default Header;
