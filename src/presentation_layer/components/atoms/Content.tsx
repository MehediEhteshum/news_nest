import React, { PropsWithChildren } from "react";

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="m-4 mb-16 mt-28 md:mt-24">{children}</div>;
};

export default Content;
