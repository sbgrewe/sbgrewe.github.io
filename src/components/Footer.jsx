import React from 'react';
import SimpleReactFooter from 'simple-react-footer';

const Footer = () => {
// Define the data for the footer
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const title = "Lorem Ipsum";

return <SimpleReactFooter
description={description}
title={title} />;
}

export default Footer;