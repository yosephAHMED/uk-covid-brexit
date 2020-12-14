import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useHistory, useLocation } from "react-router-dom";

// Functional link component which delays page navigation
export const DelayLink = props => {
  const { delay, replace, to, onUserClick, ...rest } = props;
  let timeout = null;
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeout]);

  const handleClick = e => {
    // if trying to navigate to current page stop everything
    if (location?.pathname === to) return;

    e.preventDefault();

    onUserClick();

    timeout = setTimeout(() => {
      if (replace) {
        history.replace(to);
      } else {
        history.push(to);
      }
    }, delay);
  };

  return <Link {...rest} to={to} onClick={handleClick} />;
};

DelayLink.propTypes = {
  // Milliseconds to wait before registering the click.
  delay: PropTypes.number,
  // Replace history or not
  replace: PropTypes.bool,
  // Link to go to
  to: PropTypes.string
};

DelayLink.defaultProps = {
  replace: false,
  delay: 0,
};

export default DelayLink;