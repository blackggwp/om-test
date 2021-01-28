import React from 'react';

export const PayForm: React.FC = () => {
  return (
    <form>
      {[10, 20, 50, 100, 500].map(amount =>
        <>
          <input type="radio" id={`amount-${amount}`} name="amount" value={amount} />
          <label htmlFor={`amount-${amount}`}>{amount}</label><br></br>
        </>
      )}

      <button type="submit">Pay</button>
    </form>
  );
};