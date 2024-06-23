import React, { ReactNode, PropsWithChildren } from "react";
import Header from "../atoms/Header";
import Content from "../atoms/Content";
import Footer from "../atoms/Footer";

interface PageProps {
  backgroundColor?: string;
  logoSrc?: string;
  brandName?: string;
  pageTitle?: string;
  pageButtons?: ReactNode;
  headerChildren?: ReactNode;
  themeButton?: ReactNode;
  burgerMenu?: ReactNode;
  footerChildren?: ReactNode;
  footerCustomText?: string;
}

const Page: React.FC<PropsWithChildren<PageProps>> = ({
  children,
  backgroundColor,
  logoSrc,
  brandName,
  pageTitle,
  pageButtons,
  headerChildren,
  themeButton,
  burgerMenu,
  footerChildren,
  footerCustomText,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        backgroundColor={backgroundColor}
        logoSrc={logoSrc}
        brandName={brandName}
        pageTitle={pageTitle}
        pageButtons={pageButtons}
        themeButton={themeButton}
        otherButtons={burgerMenu}
      >
        {headerChildren}
      </Header>
      <Content>{children}</Content>
      {(footerChildren || footerCustomText) && (
        <Footer backgroundColor={backgroundColor} customText={footerCustomText}>
          {footerChildren}
        </Footer>
      )}
    </div>
  );
};

export default Page;
