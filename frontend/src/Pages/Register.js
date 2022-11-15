import styled from 'styled-components';
import IconImg from '../Picture/LogInIconImage/iconImage.png';
import { mobile } from '../Responsive'

const Container = styled.div`
display: flex;
margin: 10px 10px;
justify-content: space-between;
${mobile({
    display: 'flex',
    flexDirection: 'column'
})}
`
const LeftWrapper = styled.div`
flex: 1;
display:flex;
justify-content: center;
align-items: center;
background-repeat: no-repeat;
`
const Image = styled.img`
width: 100%;
height: 100%;
`
const RightWrapper = styled.div`
flex: 1;
padding: 10px;
background-color: teal;
border-radius: 100px;
`
const Heading = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
${mobile({
    fontSize: '20px'
})}
`
const Icon = styled.div`
width: 150px;
height: 150px;
border-radius: 50%;
background-color: white;
color: blue;
font-size: 40px;
margin: 20px;
display: flex;
align-items: center;
justify-content: center;
`
const IconImage = styled.img`
width: 90%;
height: 90%;
`
const Form = styled.form`
margin:10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Input = styled.input`
margin: 5px;
padding: 15px;
border-radius: 5px;
width:400px;
${mobile({
    width: '300px'
})}
`
const Agreement = styled.span`

`
const Button = styled.button`
margin:15px;
padding: 15px;
display: flex;
align-items: center;
justify-content: center;
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
                <Image src="https://media.istockphoto.com/vectors/register-account-submit-access-login-password-username-internet-vector-id1281150061?k=20&m=1281150061&s=612x612&w=0&h=wpCvmggedXRECWK-FVL98MMllubyevIrXuUu50fdCqE=" />
            </LeftWrapper>
            <RightWrapper>
                <Heading>
                    <Icon>
                        <IconImage src={IconImg} />
                    </Icon>
                    <Title>CREATE AN ACCOUNT</Title>
                </Heading>
                <Form>
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agreement>
                    </Agreement>
                    <Button>CREATE ACCOUNT</Button>
                </Form>
            </RightWrapper>
        </Container>
    )
}

export default Register
