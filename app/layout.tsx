import React from "react";
import "styles/globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>socialcard.sh</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
