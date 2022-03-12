import React from "react";

export const Footer = () => {
  return (
    <footer
      style={{ bottom: 0, position: "fixed", width: "100%" }}
      id="footer"
      className="flex-shrink-0 py-2 bg-dark text-white-50"
    >
      <div className="container text-center">
        <small> Copyright &copy; Sportify </small>{" "}
      </div>{" "}
    </footer>
  );
};
