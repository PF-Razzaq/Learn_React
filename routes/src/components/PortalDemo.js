import React from "react";
import ReactDOM from "react";

const PortalDemo = () => {
  return ReactDOM.createPortal(
    <div>
      <h1>Hi, How are you</h1>
    </div>,
    document.getElementById("portal-root")
  );
};

export default PortalDemo;
