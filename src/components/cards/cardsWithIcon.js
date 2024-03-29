import React from "react";
import PropTypes from "prop-types";

const cardsIcon = ({ children, heading, icon }) => {
  return (
    <>
      <div
        className="col-xs-12 col-md-4"
        data-sal="slide-right"
        data-sal-easing="ease"
        data-sal-duration="2000"
      >
        <div className="fa-container">
          <i className={`fa ${icon} fa-3x`}></i>
        </div>
        <h3 className="text-center">{heading}</h3>
        <p> {children} </p>
      </div>
    </>
  );
};

cardsIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default cardsIcon;
