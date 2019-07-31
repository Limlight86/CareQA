import React from "react";

const Notification = ({ message, type, children }) => {
  let style;
  switch (type) {
    case "success":
      style = "alert alert-success";
      break;
    case "message":
      style = "alert alert-info";
      break;
    case "caution":
      style = "alert alert-warning";
      break;
    case "error":
      style = "alert alert-danger";
      break;
    default:
      style = "alert alert-info";
  }

  return (
    <div className={style} style={{margin:"0 20% 16px 20%"}}>
      <p>{message}</p>
      {children}
    </div>
  );
};

export default Notification;
