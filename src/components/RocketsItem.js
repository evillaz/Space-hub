import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeReservation, cancelReservation } from '../redux/rockets/rocketsSlice';
import './styles/RocketsItem.css';

const RocketsItem = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();
  return (
    <>
      <article className="rocket-container">
        {rockets.map((rocket) => (
          <div className="rocket-items" key={rocket.id}>
            <div className="rocket-img">

              <img src={rocket.flickr_images[0]} className="images" alt="viewimage" />
            </div>
            <div className="name-container">
              <h2 className="heading">{rocket.rocket_name}</h2>
              <p className="description">
                {rocket.reserved && <span>Reserved</span>}
                {rocket.description}
              </p>
              {rocket.reserved ? (
                <button type="button" className="btn-cancel" onClick={() => { dispatch(cancelReservation(rocket.id)); }}>Cancel Reservation</button>
              ) : (
                <button type="button" className="btn-reserve" onClick={() => { dispatch(makeReservation(rocket.id)); }}>Reserve Rocket</button>
              )}
            </div>
          </div>
        ))}
      </article>
    </>
  );
};

export default RocketsItem;
