import React from "react";

export const Footer = (props: any) => (
  <div
    style={{
      textAlign: "center",
      padding: "10px 0 20px",
    }}
  >
    {"Copyright © "}
    2021-{new Date().getFullYear()} <a href="/dashboard"> PlusWhite</a>
  </div>
);
