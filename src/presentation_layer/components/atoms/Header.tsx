import React, { PropsWithChildren } from "react";

interface HeaderProps {
  backgroundColor?: string;
  logoSrc?: string;
  headerTitle?: string;
}

const Header: React.FC<PropsWithChildren<HeaderProps>> = ({
  children,
  backgroundColor = "transparent",
  logoSrc,
  headerTitle = "BrandName",
}) => {
  return (
    <header
      className={`${backgroundColor} flex justify-center items-center p-4`}
    >
      {logoSrc && <img src={logoSrc} alt="Logo" className="w-8 h-8" />}
      {headerTitle && (
        <span className="ml-2 text-lg font-semibold">{headerTitle}</span>
      )}
      {children}
    </header>
  );
};

export default Header;
