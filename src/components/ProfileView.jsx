import { useSelector } from 'react-redux';

const ProfileView = () => {
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
          Rockets
        </ul>
      </div>
    </div>

  );
};

export default ProfileView;
