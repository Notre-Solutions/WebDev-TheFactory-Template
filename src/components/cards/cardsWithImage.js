import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";


const cardsImage = ({children, heading, img}) => {
    return (
        <>
            <div class="col-xs-12 col-md-4">
                <Img className="img-responsive" alt=""
                    fluid={
                        img.childImageSharp.fluid
                    }/>
                <h3 class="text-center">
                    {heading}</h3>
                <p> {children} </p>
            </div>
        </>
    );
};

cardsImage.propTypes = {
    children: PropTypes.node.isRequired
};


export default cardsImage;
