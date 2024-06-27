import React, { PropsWithChildren } from "react";

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default Content;
