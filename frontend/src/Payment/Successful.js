import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
align-items:center;
justify-content: center;
width: 100vw;
height: 100vh;
`
const HeaderText = styled.span`
padding: 15px 20px;
background-color: blue;
color: white;
border-radius: 5px;
`

const Successful = () => {
    return (
        <Container>
            <HeaderText>
                PAYMENT SUCCESSFUL
            </HeaderText>
        </Container>
    )
}

export default Successful;
