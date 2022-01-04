import React from 'react';

import { useBasket } from '../index';

export default function Totals(props) {
  const { cart, total, status } = useBasket();

  if (cart.length === 0) {
    return null;
  }

  //const { currency } = total;
 

  const hasDiscount = total?.discount > 0;
  const isLoading = status === 'server-basket-is-stale';

  return (
    <div {...props}>
      <div>
        {isLoading && (
          <p>Loading</p>
        )}
        <div modifier="total-price">
          <span>Total Price:</span>
          <div hide={isLoading}>
            {total.gross + total.discount}
          </div>
        </div>
        {hasDiscount && (
          <div modifier="total-discout">
            <span>Discount:</span>
            <div hide={isLoading}>
              {total.discount * -1}
            </div>
          </div>
        )}
        <div modifier="total-tax">
          <span>Tax:</span>
          <div hide={isLoading}>
            {
              parseInt((total.gross - total.net) * 100, 10) / 100
            }
          </div>
        </div>
        <div modifier="to-pay">
          <span>Total to Pay:</span>
          <div hide={isLoading}>
            {total.gross}
          </div>
        </div>
      </div>
    </div>
  );
}
