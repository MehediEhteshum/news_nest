import React, { PropsWithChildren, ReactNode } from "react";

interface HeaderProps {
  backgroundColor?: string;
  logoSrc?: string;
  brandName?: string;
  pageTitle?: string;
  themeButton?: ReactNode;
  burgerMenu?: ReactNode;
}

const Header: React.FC<PropsWithChildren<HeaderProps>> = ({
  children,
  backgroundColor = "transparent",
  logoSrc,
  brandName,
  pageTitle,
  themeButton,
  burgerMenu,
}) => {
  return (
    <header className={`${backgroundColor}`}>
      <div className="px-4 py-2 items-center flex justify-between">
        <div className="bg-gray-500 items-center md:flex">
          <div className="bg-pink-500">
            {logoSrc && (
              <img
                src={logoSrc}
                alt="Logo"
                className="w-12 md:w-16 translate-x-3 md:translate-x-0"
              />
            )}
          </div>
          <div className="bg-sky-500 md:ml-2 text-md md:text-xl font-bold">
            {brandName}
          </div>
        </div>
        <div className="bg-pink-500 text-center items-center absolute right-1/2 translate-x-1/2">
          <span className=" text-xl md:text-2xl font-bold">{pageTitle}</span>
        </div>
        <div className="bg-sky-500 flex items-center">
          {children}
          {themeButton}
          {burgerMenu}
        </div>
      </div>
    </header>
  );
};

export default Header;
