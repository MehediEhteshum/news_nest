import React, { PropsWithChildren } from "react";

interface FooterProps {
  backgroundColor?: string;
  customText?: string;
  customCssClasses?: string;
}

const Footer: React.FC<PropsWithChildren<FooterProps>> = ({
  children,
  customText = "© All rights reserved.",
  backgroundColor = "transparent",
  customCssClasses = "",
}) => {
  return (
    <footer className={`${backgroundColor} ${customCssClasses}`}>
      {children}
      {customText}
    </footer>
  );
};

export default Footer;
