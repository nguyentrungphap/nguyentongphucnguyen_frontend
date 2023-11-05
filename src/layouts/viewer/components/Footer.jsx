import React from "react";
import FooterBox from "./FooterBox";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="row-fluid">
        <FooterBox />
        <FooterBox />
        <FooterBox />
      </div>
    </footer>
  );
}
