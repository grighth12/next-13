'use client';

import { useEffect } from "react";


const Head = () => {
  useEffect(() => {
    document.title = "My App";
  }, []);

  return (
    <>
      <title>Title 22</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"  />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}

export default Head;