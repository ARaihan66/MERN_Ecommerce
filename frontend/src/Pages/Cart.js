import styled from 'styled-components';
import { MdAdd, MdRemove } from 'react-icons/md'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
background-color: lightgray;
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border:${props => props.type === 'filled' && "none"};
background-color:${props => props.type === 'filled' ? "black" : "transparent"};
color:${props => props.type === 'filled' && "white"};
`
const TopTexts = styled.div`

`

const Text = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`
const Info = styled.div`
flex:3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
`
const ProductDetail = styled.div`
flex: 2;
display: flex;
`
const Image = styled.img`
width: 200px;

`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom:20px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`
const Icon = styled.span`
cursor: pointer;
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight:200;
`
const Hr = styled.hr`
background-color: gray;
border: none;
height: 1px;
margin: 5px;
`
const Summary = styled.div`
flex:1;
border: 0.5px solid lightcoral;
border-radius: 10px;
padding: 20px;
height: 57vh;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemPrice = styled.span`

`
const SummaryItemText = styled.span`

`
const Button = styled.button`
width: 100%;
padding: 10px;
font-weight: 600;
color: white;
background-color: black;
cursor: pointer;
`









const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton> CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <Text>Shopping Bag(2)</Text>
                        <Text>Your Wishlist(0)</Text>
                    </TopTexts>
                    <TopButton type='filled'> CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.pexels.com/photos/6698230/pexels-photo-6698230.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                                <Details>
                                    <ProductName><b>Product:</b>POLOSEE SHOES</ProductName>
                                    <ProductId><b>ID:</b>43785398790</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size:</b>35.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Icon><MdAdd /></Icon>
                                        <ProductAmount>
                                            2
                                        </ProductAmount>
                                        <Icon><MdRemove /></Icon>
                                    </ProductAmountContainer>
                                    <ProductPrice>$300</ProductPrice>
                                </PriceDetail>
                            </ProductDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Details>
                                    <ProductName><b>Product:</b>POLO SHIRT</ProductName>
                                    <ProductId><b>ID:</b>437853987776</ProductId>
                                    <ProductColor color="gray" />
                                    <ProductSize><b>Size:</b>30.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Icon><MdAdd /></Icon>
                                        <ProductAmount>
                                            2
                                        </ProductAmount>
                                        <Icon><MdRemove /></Icon>
                                    </ProductAmountContainer>
                                    <ProductPrice>$150</ProductPrice>
                                </PriceDetail>
                            </ProductDetail>
                        </Product>
                    </Info>

                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>

                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart;
