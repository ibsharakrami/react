import React from "react";

function Footer() {
  // const date = new Date().getFullYear();
  const CurrentYear = new Date().getFullYear();

  return (
    <footer>
      <p> copyright @{CurrentYear} </p>{" "}
    </footer>
  );
}
export default Footer;
