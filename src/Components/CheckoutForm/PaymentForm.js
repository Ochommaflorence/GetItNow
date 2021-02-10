import React from 'react';
import { Button } from '@material-ui/core';
import Payment from './Payment';

const PaymentForm = ({ backStep }) => {
    // console.log(`shipping data`, props);
    return (
        <div className="d-flex justify-content-between">
             <Button variant="outlined" onClick={backStep}>Back</Button>
           <Payment />
        </div>
    )
}

export default PaymentForm
