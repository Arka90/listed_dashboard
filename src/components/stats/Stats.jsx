import "./Stats.scss";
import ToTRev from "../../icons/Vector.svg";
import ToTTranc from "../../icons/Vector(1).svg";
import ToTLikes from "../../icons/total_transactions_icon.svg";
import ToTUsers from "../../icons/Vector(2).svg";

import StatCard from "../stat-card/StatCard";
function Stats() {
  return (
    <div className="stats_container">
      <StatCard
        icon={ToTRev}
        label="Total Revenue"
        number="$2,129,430"
        color="#ddefe0"
      />
      <StatCard
        icon={ToTTranc}
        label="Total Transaction"
        number="1,520"
        color="#f4ecdd"
      />
      <StatCard
        icon={ToTLikes}
        label="Total Likes"
        number="9,721"
        color="#efdada"
      />
      <StatCard
        icon={ToTUsers}
        label="Total Users"
        number="892"
        color="#dee0ef"
      />
    </div>
  );
}

export default Stats;
