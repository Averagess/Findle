interface Props {
  notifications: string[];
}

const NotificationContainer = ({ notifications }: Props) => {
  return (
    <div className="notification-container">
      {notifications.map((notification, index) => {
        return (
          <div
            key={index}
            className={
              "notification"
            }
          >
            {notification}
          </div>
        );
      })}
    </div>
  );
};

export default NotificationContainer;
