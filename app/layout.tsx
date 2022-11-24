import React from "react";
import { JetBrains_Mono } from "@next/font/google";
import "styles/globals.css";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-JetBrainsMono",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${JetBrainsMono.variable} font-mono`}>
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
