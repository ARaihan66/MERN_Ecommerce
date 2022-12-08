import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const Button = styled.button`
padding: 15px 20px;
background-color: blue;
border: none;
border-radius: 5px;
font-weight: 600;

&:hover{
background-color: white;
color: blue;
border: 1px solid blue;
}
`

const public_key = "pk_test_51MCL2QLd3ml1apOvrCD5483czrMFqcRUVEzVT9JSGT6H3rDEsG8jMtZll7IK7ySiqdTw8z7FAaTzeyXyo3ZSNxaa00gKoFgUYs"
const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);


    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:4000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                )
                console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        stripeToken && makeRequest()

    }, [stripeToken])



    return (
        <Container>
            <StripeCheckout
                name="POLO"
                image='https://seeklogo.com/images/U/u-s-polo-assn-logo-17BE53CEF1-seeklogo.com.png'
                billingAddress
                shippingAddress
                description="Your Total Cost is $1000"
                amount={2000}
                token={onToken}
                stripeKey={public_key}
            >
                <Button>PAY NOW</Button>
            </StripeCheckout>
        </Container >
    )
}

export default Pay;
