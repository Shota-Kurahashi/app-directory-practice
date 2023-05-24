import React from "react";
import BasicLayout from "@/components/Layouts/BasicLayout";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <BasicLayout>{children}</BasicLayout>;
};

export default layout;
