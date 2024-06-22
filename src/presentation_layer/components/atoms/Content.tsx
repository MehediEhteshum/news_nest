import React, { PropsWithChildren } from "react";

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export default Content;
