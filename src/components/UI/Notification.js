import React from "react";
import styles from "./Notification.module.css";

const Notification = (props) => {
  console.log(props.cls);
  return (
    <div
      className={styles["container"]}
      style={{
        backgroundColor: `${props.cls == undefined ? "blue" : props.cls}`,
      }}
    >
      {props.title}
    </div>
  );
};
export default Notification;
