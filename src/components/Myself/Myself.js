import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house, ring }) => {
    return (
        <div>
            <h2>Myself</h2>
            <p>House no: {house}</p>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default Myself;