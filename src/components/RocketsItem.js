import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { makeReservation, cancelReservation } from '../redux/rockets/rocketsSlice';

const RocketsItem = ({
  name, description, img, id, reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <article className="rocket-container">
        <div className="rocket-img">
          <img src={img} alt="viewimage" />
        </div>
        <div>
          <h2>{name}</h2>
          <p>
            {reserved && <span>Reserved</span>}
            {description}
          </p>
          {
            reserved ? (
              <button type="button" className="btn-cancel" onClick={() => { dispatch(cancelReservation(id)); }}>Cancel Reservation</button>
            ) : (
              <button type="button" className="btn-reserve" onClick={() => { dispatch(makeReservation(id)); }}>Reserve Rocket</button>
            )
          }
        </div>
      </article>
    </>
  );
};

RocketsItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketsItem;
