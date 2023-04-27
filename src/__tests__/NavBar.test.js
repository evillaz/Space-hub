import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('NavBar', () => {
  it('Testing of NavBar.jsx', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
