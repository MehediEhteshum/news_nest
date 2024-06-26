import React, { ReactNode, PropsWithChildren } from "react";
import Header from "../atoms/Header";
import Content from "../atoms/Content";
import Footer from "../atoms/Footer";

type PageProps = {
  backgroundColor?: string;
  logoSrc?: string;
  brandName?: string;
  pageTitle?: string;
  pageButtons?: ReactNode;
  headerChildren?: ReactNode;
  headerNavHandler?: () => void;
  modeToggle?: ReactNode;
  otherButtons?: ReactNode;
  footerChildren?: ReactNode;
  footerCustomText?: string;
  footerCustomCssClasses?: string;
};

const Page: React.FC<PropsWithChildren<PageProps>> = ({
  children,
  backgroundColor,
  logoSrc,
  brandName,
  pageTitle,
  pageButtons,
  headerChildren,
  headerNavHandler,
  modeToggle,
  otherButtons,
  footerChildren,
  footerCustomText,
  footerCustomCssClasses,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        backgroundColor={backgroundColor}
        logoSrc={logoSrc}
        brandName={brandName}
        pageTitle={pageTitle}
        pageButtons={pageButtons}
        modeToggle={modeToggle}
        otherButtons={otherButtons}
        navigationHandler={headerNavHandler}
      >
        {headerChildren}
      </Header>
      <Content>{children}</Content>
      {(footerChildren || footerCustomText) && (
        <Footer
          backgroundColor={backgroundColor}
          customText={footerCustomText}
          customCssClasses={footerCustomCssClasses}
        >
          {footerChildren}
        </Footer>
      )}
    </div>
  );
};

export default Page;
