import { useState } from "react";
import "./banner.style.css";

export function Banner({ children, changeBannerText }) {
  return <section className="banner">{children}</section>;
}
