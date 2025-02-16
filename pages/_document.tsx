import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";

import { SFProText } from "@/config/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        style={{fontFamily:"SFProText"}}
        className={clsx(
          "min-h-screen bg-background antialiased",
          SFProText.variable,
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
