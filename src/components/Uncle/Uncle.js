import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({ house }) => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p>House: {house}</p>
            <p>Money: {money}</p>
        </div>
    );
};

export default Uncle;