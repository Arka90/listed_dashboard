import RemainderCard from "../remainder-cards/remainder-card";
import "./reminder.scss";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";
function Reminder() {
  return (
    <div className="remainder-container">
      <div className="remainder-header">
        <h3 className="remainder-header">Today’s schedule</h3>
        <span className="show-all">
          See All <BiChevronRight />
        </span>
      </div>
      <RemainderCard
        color="#98dd7c"
        title="Meeting with suppliers from Kuta Bali"
        time="14.00-15.00"
        location="at Sunset Road, Kuta, Bali"
      />

      <RemainderCard
        color="#6972c3"
        title="Check operation at Giga Factory 1"
        time="18.00-20.00"
        location="at Central Jakarta "
      />
    </div>
  );
}

export default Reminder;
