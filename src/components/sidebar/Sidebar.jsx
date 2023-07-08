import "./Sidebar.scss";
import DashboardIcon from "../../icons/dashboard_icon.svg";
import TransactionsIcon from "../../icons/transaction_icon.svg";
import SchedulesIcon from "../../icons/schedule_icon.svg";
import UsersIcon from "../../icons/user_icon.svg";
import SettingsIcon from "../../icons/setting_icon.svg";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="menu-container">
        <h1 className="sidebar__logo">Board.</h1>
        <ul className="sidebar__menu">
          <li className="sidebar__menu__item active">
            <img
              className="sidebar__icon"
              src={DashboardIcon}
              alt="dashboard"
            />
            Dashboard
          </li>
          <li className="sidebar__menu__item">
            <img
              className="sidebar__icon"
              src={TransactionsIcon}
              alt="transaction"
            />
            Transactions
          </li>
          <li className="sidebar__menu__item">
            <img
              className="sidebar__icon"
              src={SchedulesIcon}
              alt="schedules"
            />
            Schedules
          </li>
          <li className="sidebar__menu__item">
            <img className="sidebar__icon" src={UsersIcon} alt="user" /> Users
          </li>
          <li className="sidebar__menu__item">
            <img className="sidebar__icon" src={SettingsIcon} alt="settings" />
            Settings
          </li>
        </ul>
      </div>

      <footer className="sidebar__footer">
        <p>Help</p>
        <p>Contact Us</p>
      </footer>
    </aside>
  );
}

export default Sidebar;
