import "./Dashboard.scss";
import Widget from "../widget/Widget";
import Stats from "../stats/Stats";
import LineChart from "../line-chart/LineChart";
import Piegraph from "../Piegraph/Piegraph";
import Reminder from "../reminder/reminder";
function Dashboard() {
  return (
    <main className="dashboard">
      <Widget />
      <Stats />
      <LineChart />
      <div className="top-prods-scheduel">
        <Piegraph />
        <Reminder />
      </div>
    </main>
  );
}

export default Dashboard;
