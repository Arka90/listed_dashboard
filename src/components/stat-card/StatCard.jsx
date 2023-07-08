import "./StatCard.scss";

function StatCard({ icon, number, label, color }) {
  return (
    <div className="statcard-container" style={{ backgroundColor: `${color}` }}>
      <img className="stat-icon" src={icon} alt="icon" />
      <div className="statcard-content">
        <p className="statcard-label">{label}</p>

        <p className="statcard-number">{number}</p>
      </div>
    </div>
  );
}

export default StatCard;
