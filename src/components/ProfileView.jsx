import { useSelector } from 'react-redux';

const ProfileView = () => {
  const rockets = useSelector((store) => store.rockets);
  const filteredRockets = rockets.rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="profile-container">
      <div className="my-subtab">
        <h3 className="profile-heading">My Missions</h3>
        <ul className="feature-list">
          Missions
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
