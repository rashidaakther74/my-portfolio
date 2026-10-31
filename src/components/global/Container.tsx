"use client";

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full lg:max-w-6xl px-4 mx-auto lg:px-0">
      {children}
    </div>
  );
};

export default Container;