import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import { getItem } from "../../utils";
import ShortLinksListItem from "./ShortLinkListItem";

const ShortLinksList = ({ localStorageKey }) => {
  const shortLinks = getItem(localStorageKey) ?? [];

  return (
    <div>
      <TransitionGroup>
        {shortLinks.map((link) => (
          <CSSTransition key={link.shortUrl} classNames="flip" timeout={3000}>
            <ShortLinksListItem link={link} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

ShortLinksList.propTypes = {
  localStorageKey: PropTypes.string.isRequired,
};

export default ShortLinksList;
