import { useSelector } from 'react-redux';
import './styles/ProfileView.css';

const ProfileView = () => {
  const rockets = useSelector((store) => store.rockets);
  const filteredRockets = rockets.rockets.filter((rocket) => rocket.reserved === true);
  const myMissions = useSelector((store) => store.missions.missions.filter((mission) => {
    if (mission.reserved) {
      return true;
    }
    return false;
  }));

  return (
    
    <div className="profile-container">
       <div className="my-subtab">
        <h3 className="profile-heading">My Missions</h3>
        <ul className="feature-list">
          {myMissions.length > 0
            ? (
              myMissions.map((mission) => (
                <li className="feature-item" key={mission.mission_id}>{mission.mission_name}</li>
              ))
            )
            : (
              <div className="feature-item">
                You haven&apos;t joined any Missions yet
              </div>
            )}
        </ul>
      </div>
      <div className="my-subtab">
        <h3 className="profile-heading">My Rockets</h3>
        <ul className="feature-list">
          {filteredRockets.map((rocket) => {
            const rocketId = rocket.id;
            return <li className="feature-item" key={rocketId}>{rocket.rocket_name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProfileView;
