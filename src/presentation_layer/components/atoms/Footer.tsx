import React, { PropsWithChildren } from "react";

interface FooterProps {
  backgroundColor?: string;
  customText?: string;
}

const Footer: React.FC<PropsWithChildren<FooterProps>> = ({
  children,
  customText = "© All rights reserved.",
  backgroundColor = "transparent",
}) => {
  return (
    <footer
      className={`${backgroundColor} text-center py-2 fixed bottom-0 w-full`}
    >
      {children}
      {customText}
    </footer>
  );
};

export default Footer;
