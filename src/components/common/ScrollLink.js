import React from 'react';
import PropTypes from 'prop-types';
import { Link, Element } from 'react-scroll';

const ScrollLink = ({scrollLink}) => {

  return (
    <Link activeClass="active"
      to={scrollLink.to}
      spy={true}
      smooth={true}
      offset={scrollLink.offset}
      duration={500}
      onClick={scrollLink.onClick}>
      {scrollLink.text}
    </Link>
    );
}

ScrollLink.propTypes = {
  scrollLink: PropTypes.object.isRequired
};

export default ScrollLink;
