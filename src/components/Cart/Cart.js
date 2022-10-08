import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveToCart }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please atleast 1 item</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <h3>Amar jonno akta naw</h3>
            <p>tumar nijer jonno akta</p>
            <small>amar jonno arekta naw please</small>
        </div>
    }
    else {
        message = <p>Thanks for buying</p>
    }

    return (
        <div>
            <h2 className={cart.length === 2 ? `orange` : `purple`}>This is order summary</h2>
            <h5 className={`bold ${cart.length === 2 ? 'orange' : 'purple'}`}>Order quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveToCart(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>tinjon ke gift diba</p> : <p>kino kino</p>
            }
            <p>&& operator</p>
            {
                cart.length === 2 && <h2>Double item</h2>
            }
            <p>|| operator</p>
            {
                cart.length === 4 || <p>4ta item na</p>
            }

        </div>
    );
};

export default Cart;