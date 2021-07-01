import React from "react";
import PropTypes from "prop-types";
import StyledBadge from "./style";

function Badge({ children, show = false, showZero = false, count = 0, ...rest }) {
  return (
    <StyledBadge variant={children ? "dot" : "default"} {...rest} show={show} count={count} showZero={showZero}>
      {children || count}
    </StyledBadge>
  );
}

Badge.propTypes = {
  children: PropTypes.any
};

export default Badge;
