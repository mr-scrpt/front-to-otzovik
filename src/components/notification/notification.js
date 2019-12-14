import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  //openNotification,
  closeNotification
} from "../../modules/notification";

const Notification = props => {
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    const { notificationList } = props;
    setNotification(notificationList);
    const timeoutsQueue = [];

    notificationList.map(({ id }) => {
      const timeout = setTimeout(() => {
        closeNotification(id);
      }, 5000);

      timeoutsQueue.push(timeout);
    });

    return () => {
      timeoutsQueue.length &&
        timeoutsQueue.map(timeout => clearTimeout(timeout));
    };
  }, [props.notificationList.length]);
  const {
    //openNotification,
    closeNotification
  } = props;

  return (
    <div>
      {notification.length
        ? notification.map(({ text, id, variant }, idx) => (
            <div key={id} className={variant}>
              {text}
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
  //openNotification,
  closeNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
