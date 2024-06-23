import React, { PropsWithChildren, ReactNode } from "react";

interface HeaderProps {
  backgroundColor?: string;
  logoSrc?: string;
  brandName?: string;
  pageTitle?: string;
  pageButtons?: ReactNode;
  themeButton?: ReactNode;
  otherButtons?: ReactNode;
}

const Header: React.FC<PropsWithChildren<HeaderProps>> = ({
  children,
  backgroundColor = "transparent",
  logoSrc,
  brandName,
  pageTitle,
  pageButtons,
  themeButton,
  otherButtons,
}) => {
  return (
    <header className={`${backgroundColor}`}>
      <div className="px-4 py-2 items-center flex justify-between">
        <div className="items-center md:flex">
          {logoSrc && (
            <img
              src={logoSrc}
              alt="Logo"
              className="w-12 md:w-16 translate-x-3 md:translate-x-0"
            />
          )}
          <span className="md:ml-2 text-lg md:text-xl font-bold">
            {brandName}
          </span>
        </div>
        <div className="items-center absolute right-1/2 translate-x-1/2">
          <span className="text-md md:text-lg font-bold">{pageTitle}</span>
          <div className="flex items-center justify-center">{pageButtons}</div>
        </div>
        <div className="flex items-center">
          {children}
          {themeButton}
          {otherButtons}
        </div>
      </div>
    </header>
  );
};

export default Header;
