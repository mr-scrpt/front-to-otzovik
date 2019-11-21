import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  openNotification,
  closeNotification
} from "../../modules/notification";

const Notification = props => {
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    const { notificationList } = props;
    setNotification(notificationList);
  });
  const { openNotification, closeNotification } = props;

  return (
    <div>
      <button
        onClick={() => {
          openNotification({ text: "test", variant: "myVar" });
        }}
      >
        Ошибка
      </button>
      {notification.length
        ? notification.map(({ text, id, variant }, idx) => (
            <div key={id}>
              {text}
              {variant}
              <button
                onClick={() => {
                  closeNotification(id);
                }}
              >
                Х
              </button>
            </div>
          ))
        : null}
    </div>
  );
};

const mapStateToProps = ({ notification }) => ({
  notificationList: notification
});
const mapDispatchToProps = {
  openNotification,
  closeNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
