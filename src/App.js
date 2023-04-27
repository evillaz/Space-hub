import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import Profile from './routes/MyProfile';
import './styles/style.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="missions" element={<Missions />} />
          <Route path="/" element={<Rockets />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
