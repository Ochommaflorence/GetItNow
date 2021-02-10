import React from 'react';
import { Button } from '@material-ui/core';
import { usePaystackPayment } from 'react-paystack';

  const config = {
      reference: (new Date()).getTime(),
      email: "user@example.com",
      amount: 20000,
      publicKey: 'pk_test_528ce1d4ac450c01b788b707e15a3c5f6adebfe9',
  };
  

  const onSuccess = (reference) => {
    alert("Thanks for doing business with us! Come back soon!!")
  };

 
  const onClose = () => {
    alert('Thank you for patronizing Hummer city')
  }

  const Payment = () => {
      const initializePayment = usePaystackPayment(config);
      return (
        <div>
            <Button variant="contained" color="secondary" onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Make Payment</Button>
        </div>
      );
  };

  export default Payment