import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  console.log(rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <h1>Rockets</h1>
      {/* <img src={rocket.flickr_images[0]} alt={rocket.name} /> */}
      <div>
        {rockets.rockets.map((rocket) => (
          <div key={rocket.id}>
            <img src={rocket.flickr_images[0]} alt={rocket.name} />
            <h2>{rocket.rocket_name}</h2>
            <p>{rocket.description}</p>
            <button type="button">reserved</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Rockets;
