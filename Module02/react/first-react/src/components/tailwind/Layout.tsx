import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
  mode?: "dark" | "light";
}

function Layout({ children, mode }: LayoutProps) {
  return (
    <div
      className={
        mode === "dark"
          ? "bg-black text-white w-screen h-full flex flex-col justify-center items-center"
          : "bg-white text-black w-screen h-full flex flex-col justify-center items-center"
      }
    >
      {children}
    </div>
  );
}

export default Layout;
