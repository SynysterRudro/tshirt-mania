import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ ring }) => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            <p>Gift: {ring}</p>
            <p>Gift: {house}</p>
            <button onClick={() => setHouse(house + 1)}>Increase</button>
        </div>
    );
};

export default Special;