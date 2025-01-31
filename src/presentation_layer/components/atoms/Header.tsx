import React, { PropsWithChildren, ReactNode } from "react";

type HeaderProps = {
  backgroundColor?: string;
  logoSrc?: string;
  brandName?: string;
  pageTitle?: string;
  pageButtons?: ReactNode;
  modeToggle?: ReactNode;
  otherButtons?: ReactNode;
  navigationHandler?: () => void;
};

const Header: React.FC<PropsWithChildren<HeaderProps>> = ({
  children,
  backgroundColor = "transparent",
  logoSrc,
  brandName,
  pageTitle,
  pageButtons,
  modeToggle,
  otherButtons,
  navigationHandler,
}) => {
  return (
    <header className={`${backgroundColor} fixed top-0 w-full z-50`}>
      <div className="px-4 py-2 items-center flex justify-between">
        <div className="items-center md:flex">
          {logoSrc && (
            <img
              src={logoSrc}
              alt="Logo"
              className="w-12 md:w-16 translate-x-3 md:translate-x-0 cursor-pointer"
              onClick={navigationHandler}
            />
          )}
          <span
            className="md:ml-2 text-lg md:text-xl font-bold cursor-pointer"
            onClick={navigationHandler}
          >
            {brandName}
          </span>
        </div>
        <div className="items-center absolute right-1/2 translate-x-1/2">
          <span className="text-md md:text-lg font-bold">{pageTitle}</span>
          <div className="flex items-center justify-center">{pageButtons}</div>
        </div>
        <div className="flex items-center">
          {children}
          <span className="m-1">{modeToggle}</span>
          <span className="m-1">{otherButtons}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
