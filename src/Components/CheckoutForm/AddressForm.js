import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './Checkout/CustomTextField';
import { NavLink } from 'react-router-dom';

const AddressForm = ({next}) => {
    const methods = useForm();
    return (
        <div>
          <Typography variant="h6" gutterBottom> Billing Address </Typography>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => next({...data}))}>
                 <Grid container spacing={3}>
                 <FormInput required name="firstName" label="First name" />
                 <FormInput required name="lastName" label="Last name" />
                 <FormInput required name="address1" label="Address line" />
                 <FormInput required name="email" label="Email" />
                 <FormInput required name="city" label="City" />
                 <FormInput required name="zip" label="Zip / Postal code" />
                 </Grid>

                 <br/>
                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={NavLink} variant="outlined" to="/cart">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary">Next</Button>
          </div>
            </form>

          </FormProvider>
        </div>
    )
}

export default AddressForm
