import React, { ReactNode, PropsWithChildren } from "react";
import Header from "../atoms/Header";
import Content from "../atoms/Content";
import Footer from "../atoms/Footer";

interface PageProps {
  backgroundColor?: string;
  logoSrc?: string;
  headerTitle?: string;
  headerChildren?: ReactNode;
  footerChildren?: ReactNode;
  footerCustomText?: string;
}

const Page: React.FC<PropsWithChildren<PageProps>> = ({
  children,
  backgroundColor,
  logoSrc,
  headerTitle,
  headerChildren,
  footerChildren,
  footerCustomText,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        backgroundColor={backgroundColor}
        logoSrc={logoSrc}
        headerTitle={headerTitle}
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
