import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckOutform from './CheckOutform';

const stripePromise = loadStripe('pk_test_51L26jvB60Q33shzCF5XRhUE3dReqFs5nl26BnGDa4UxYwG4qn35kYy1TFIUOj09Dt4ICCeROooGYd448ELYHt4hH0017VNCB22')

const Payment = () => {
    const [payment, setPayment] = useState([])
    const [price, setPrice] = useState([])
    const { id } = useParams();
    const url = `https://powerful-retreat-95123.herokuapp.com/payment/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => setPayment(result))
    }, [])

    useEffect(() =>{
        fetch(`https://powerful-retreat-95123.herokuapp.com/tools/${id}`)
        .then(res => res.json())
        .then(resu => setPayment(resu))
    },[])



    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold"></p>
                    <h2 class="card-title font-bold">Product Name: {payment.productName} </h2>
                    <p>Your Ordered Quantity: <span className='text-orange-700 font-bold'>{ payment.quantity}</span></p>
                    <p className='font-bold'>Please pay : ${payment.prize}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutform
                               payment ={payment}
                        ></CheckOutform>
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;