import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { makeReservation, cancelReservation } from '../redux/rockets/rocketsSlice';
import Rockets from '../components/Rockets';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

describe('Rockets component', () => {
    let dispatch;

    beforeEach(() => {
        dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders rocket items', () => {
        useSelector.mockReturnValue({
            rockets: [
                {
                    id: 1,
                    rocket_name: 'Rocket 1',
                    description: 'Rocket 1 description',
                    flickr_images: ['https://rocket1image.com'],
                    reserved: false,
                },
                {
                    id: 2,
                    rocket_name: 'Rocket 2',
                    description: 'Rocket 2 description',
                    flickr_images: ['https://rocket2image.com'],
                    reserved: true,
                },
            ],
        });

        const { getByText, getAllByRole } = render(<Rockets />);

        expect(getByText('Rocket 1')).toBeInTheDocument();
        expect(getByText('Rocket 2')).toBeInTheDocument();

        const buttons = getAllByRole('button');
        expect(buttons).toHaveLength(2);
        expect(buttons[0]).toHaveTextContent('Reserve Rocket');
        expect(buttons[1]).toHaveTextContent('Cancel Reservation');
    });

    it('dispatches reserveActive action when reserve button is clicked', () => {
        useSelector.mockReturnValue({
            rockets: [
                {
                    id: 1,
                    rocket_name: 'Rocket 1',
                    description: 'Rocket 1 description',
                    flickr_images: ['https://rocket1image.com'],
                    reserved: false,
                },
            ],
        });

        const { getByRole } = render(<Rockets />);
        const reserveButton = getByRole('button', { name: 'Reserve Rocket' });

        fireEvent.click(reserveButton);

        expect(dispatch).toHaveBeenCalledWith(makeReservation(1));
    });

    it('dispatches cancelReserve action when cancel reservation button is clicked', () => {
        useSelector.mockReturnValue({
            rockets: [
                {
                    id: 1,
                    rocket_name: 'Rocket 1',
                    description: 'Rocket 1 description',
                    flickr_images: ['https://rocket1image.com'],
                    reserved: true,
                },
            ],
        });

        const { getByRole } = render(<Rockets />);
        const cancelButton = getByRole('button', { name: 'Cancel Reservation' });

        fireEvent.click(cancelButton);

        expect(dispatch).toHaveBeenCalledWith(cancelReservation(1));
    });
});