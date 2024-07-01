import React from 'react';

const JavascriptIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="24" height="24">
    {/* Path para el icono de JavaScript */}
  </svg>
);

const CssIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="24" height="24">
    {/* Path para el icono de CSS */}
  </svg>
);

const HtmlIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="24" height="24">
    {/* Path para el icono de HTML */}
  </svg>
);

const ReactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="24" height="24">
    {/* Path para el icono de React */}
  </svg>
);

const IconComponent = ({ icon }) => {
  let Icon;

  switch (icon) {
    case 'javascript':
      Icon = JavascriptIcon;
      break;
    case 'css':
      Icon = CssIcon;
      break;
    case 'html':
      Icon = HtmlIcon;
      break;
    case 'react':
      Icon = ReactIcon;
      break;
    default:
      Icon = null;
      break;
  }

  return Icon ? <Icon /> : null;
};

export default IconComponent;
