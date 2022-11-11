"use client";

import { useEffect } from "react";

const Template = ({children } : React.PropsWithChildren<{params: any}>) => {
  // FIXME: This is a hack to get the page title to update
  useEffect(() => {
    document.title = "";
  }, []);

  return (
    <>
      {children}
    </>
  )
}

export default Template