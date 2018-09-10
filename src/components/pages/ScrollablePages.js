import React from 'react';
import { Link, Element } from 'react-scroll';
import Experience from './Experience';
import Skillset from './Skillset';
import Education from './Education';
import Resume from './Resume';
import Contact from './Contact';
import BackToTop from '../common/BackToTop';

const ScrollablePages = () => {
  return [
    <Element key="experience_anchor" name="experience" />,
    <Experience key="experience" />,
    <Element key="skillset_anchor" name="skillset" />,
    <Skillset key="skillset" />,
    <Element key="education_anchor" name="education" />,
    <Education key="education" />,
    <Element key="resume_anchor" name="resume" />,
    <Resume key="resume" />,
    <Element key="contact_anchor" name="contact" />,
    <Contact key="contact" />,
    <BackToTop key="back_to_top" />
  ];
};

export default ScrollablePages;
