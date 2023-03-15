import React from "react";
import type { GatsbyBrowser } from "gatsby";

import "terminal.css";
import "./src/styles/fonts/index.scss";
import "./src/styles/global.scss";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return <main className="main-content-wrapper">{element}</main>;
};
