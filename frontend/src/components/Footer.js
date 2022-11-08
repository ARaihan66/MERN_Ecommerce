import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
display: flex;
`
const Logo = styled.h1`

`
const Description = styled.p`
text-align: justify;
`
const SocialContainer = styled.div`

`
const SocialIcon = styled.div`

`

const Left = styled.div`
flex: 1;
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
                        {/* <FontAwesomeIcon icon={ } /> */}
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
