import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { MdRoom, MdMail } from 'react-icons/md';

const Container = styled.div`
display: flex;
`
const Logo = styled.h1`

`
const Description = styled.p`
text-align: justify;
margin: 20px 0px;
`
const SocialContainer = styled.div`

`
const SocialIcon = styled.div`
display: flex;
font-size: 30px;
margin: 10px 0;
`
const Icon = styled.div`
cursor: pointer;
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin: 8px;
background-color: #${props => props.color};

&:hover{
    background-color: wheat;
}
`

const Left = styled.div`
flex: 1;
flex-direction: column;
padding: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
`
const Title = styled.h3`
margin-top: 10px;
margin-bottom:30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style-type: none;
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
margin-bottom: 15px;
width: 50%;
cursor: pointer;

&:hover{
    text-decoration: underline;
}
`
const Right = styled.div`
flex: 1;
padding: 20px;
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styled.img`
width:300px;
height: 80px;

`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>POLO.SHOP</Logo>
                <Description>
                    Online Shopping BD has never been easier. POLO.SHOP is best online shopping store in all countries that features 10+ million products at affordable prices. It is reliable and convenient delivery of products to your doorstep. POLO.SHOP being the trusted online shop  aims to provide a trouble-free shopping experience for the people of the world but is also providing ample opportunity for international online shopping.
                </Description>
                <SocialContainer>
                    <SocialIcon>
                        <Icon color='385999'>
                            <FaFacebookF />
                        </Icon>
                        <Icon color='E4405F'>
                            <FaInstagram />
                        </Icon>
                        <Icon color='55ACEE'>
                            <FaTwitter />
                        </Icon>
                        <Icon color='E60023'>
                            <FaWhatsapp />
                        </Icon>
                    </SocialIcon>
                </SocialContainer>
            </Left>


            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Money Return</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>


            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <MdRoom style={{ fontSize: '20px', marginRight: '8px' }} /> 410 Terry Ave N, Seattle 98109, WA
                </ContactItem>
                <ContactItem>
                    <FaPhoneAlt style={{ fontSize: '20px', marginRight: '8px' }} />  +99 347 3458
                </ContactItem>
                <ContactItem>
                    <MdMail style={{ fontSize: '20px', marginRight: '8px' }} />contact@poloshop.com
                </ContactItem>
                <Payment src="https://support.fitaffinity.com/hc/article_attachments/360001562146/Screen_Shot_2018-05-07_at_8.34.54_pm.png" />
            </Right>
        </Container>
    )
}

export default Footer
