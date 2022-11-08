import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';





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
`
const Right = styled.div`
flex: 1;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>POLO.SHOP</Logo>
                <Description>
                    Online Shopping BD has never been easier. POLO.SHOP is best online shopping store in Bangladesh that features 10+ million products at affordable prices. As bangaldesh's online shopping landscape is expanding every year, online shopping in dhaka, chittagong, khulna, sylhet and other big cities are also gaining momentum. POLO.SHOP is among best websites for online shopping in bangladesh that promises fast, reliable and convenient delivery of products to your doorstep. POLO.SHOP being the trusted online shop in Bangladesh aims to provide a trouble-free shopping experience for the people of Bangladesh but is also providing ample opportunity for international online shopping from Bangladesh. POLO.SHOP aims to make online shopping accessible to all parts of the country.
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

            </Center>
            <Right>

            </Right>
        </Container>
    )
}

export default Footer
