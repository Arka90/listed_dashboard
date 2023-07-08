import "./Widget.scss";
import NotificationIcon from "../../icons/notification.svg";
import SearchIcon from "../../icons/Search icon.svg";
function Widget() {
  return (
    <div className="widget-container">
      <span className="widget-logo">Dashboard</span>
      <div className="widgets">
        <div className="search-container">
          <input placeholder="Search.." />
          <img src={SearchIcon} alt="search-icon" />
        </div>
        <img src={NotificationIcon} alt="notification_icon" />
        <img
          src="/profilepic.png"
          alt="profile_picture"
          className="profile_picture"
        />
      </div>
    </div>
  );
}

export default Widget;
