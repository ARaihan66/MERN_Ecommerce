import styled from "styled-components"
import { popularProducts } from './Data';
import Product from "./Product";
import { mobile } from "../Responsive";

const Container = styled.div`
background-color: antiquewhite;
`

const Title = styled.h1`
font-size: 70px;
display: flex;
align-items: center;
justify-content: center;
margin: 20px 0;
${mobile({ fontSize: "20px", paddingTop: "10px" })}
`

const Item = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
${mobile({ paddingTop: '10px' })}
`



const Products = () => {
    return (
        <Container>
            <Title>POLO'S POPULER</Title>
            <Item>
                {
                    popularProducts.map(item => (
                        <Product item={item} key={item.id} />
                    ))
                }
            </Item>
        </Container>
    )
}

export default Products
