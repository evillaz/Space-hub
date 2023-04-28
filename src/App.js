import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout';
import RocketPage from './routes/RocketsPage';
import Missions from './routes/Missions';
import Profile from './routes/MyProfile';
import './styles/style.css';
import { fetchRockets } from './redux/rockets/rocketsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="missions" element={<Missions />} />
          <Route path="/" element={<RocketPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
