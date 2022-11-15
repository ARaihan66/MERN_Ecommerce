import styled from 'styled-components';
import { CiPaperplane } from 'react-icons/ci';
import { mobile } from '../Responsive'

const Container = styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
${mobile({
    fontSize: '30px'
})}
`
const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({
    fontSize: '20px',
    textAlign: 'center'
})}
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({
    width: '80%'
})}
`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`
const Button = styled.button`
flex: 1;
border: none;
background-color: gray;
color: white;
font-size:20px;

&:hover{
    background-color: teal;
    color: black;
}
`

const Newsletter = () => {
    return (
        <Container>
            <Title>NEWSLETTER</Title>
            <Description>GET TIMELY UPDATES FROM YOUR FAVORITE PRODUCTS</Description>
            <InputContainer>
                <Input placeholder='abc@gmail.con' />
                <Button>
                    < CiPaperplane />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter;
