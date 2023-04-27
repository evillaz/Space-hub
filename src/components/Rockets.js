import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import RocketsItem from './RocketsItem';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      {rockets.rockets.map((rocket) => (
        <RocketsItem
          key={rocket.id}
          name={rocket.rocket_name}
          description={rocket.description}
          img={rocket.flickr_images[0]}
          id={rocket.id}
          reserved={rocket.reserved}
        />
      ))}

    </div>
  );
};
export default Rockets;
