import React, { PropsWithChildren } from "react";

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="p-4 pb-16">{children}</div>;
};

export default Content;
