import React from 'react'
import styled from 'styled-components';

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

&:hover{
background-color: white;
color: blue;
border: 1px solid blue;
`

const Pay = () => {
    return (
        <Container>
            <Button>Payment</Button>
        </Container>
    )
}

export default Pay;
