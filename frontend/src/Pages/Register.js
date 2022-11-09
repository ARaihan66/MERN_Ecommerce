import styled from 'styled-components'


const Container = styled.div`
display: flex;
margin: 10px 10px;
justify-content: space-between;
`
const LeftWrapper = styled.div`
flex: 1;
width: 100vw;
height: 96vh;
background: url("https://media.istockphoto.com/vectors/register-account-submit-access-login-password-username-internet-vector-id1281150061?k=20&m=1281150061&s=612x612&w=0&h=wpCvmggedXRECWK-FVL98MMllubyevIrXuUu50fdCqE=");
background-size: cover;
`
const RightWrapper = styled.div`
flex: 1;
width: 100vw;
height: 96vh;
padding: 10px;
background-color: teal;
border-radius: 100px;
`
const Title = styled.h1`
margin: 20px;
display: flex;
align-items: center;
justify-content: center;
`
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Input = styled.input`
margin: 5px;
padding: 15px;
border-radius: 5px;
width: 80%;
`
const Agreement = styled.span`
margin: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Button = styled.button`
margin: 10px;
padding: 15px 20px;
font-weight: 600;
border: none;
border-radius: 5px;

&:hover{
    background-color: lightgrey;
}
`


const Register = () => {
    return (
        <Container>
            <LeftWrapper>
            </LeftWrapper>
            <RightWrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Firstname" />
                    <Input placeholder="Lastname" />
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agreement>
                        By creating an account, I consent to the processing of My
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE ACCOUNT</Button>
                </Form>
            </RightWrapper>
        </Container>
    )
}

export default Register
