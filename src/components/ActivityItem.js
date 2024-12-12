import "../css/activityItem.css";

const ActivityItem = ({
  activityPeriod,
  activityTitle,
  activityDescription,
  activityLocation,
}) => {
  return (
    <div className="activity-container">
      <div className="period">{activityPeriod}</div>
      <div className="activity-details">
        <h2 className="activity-title">{activityTitle}</h2>
        <h1 className="activity-location">{activityLocation}</h1>
        <p className="activity-description">{activityDescription}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
