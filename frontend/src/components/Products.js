import styled from "styled-components"
import { popularProducts } from './Data';
import Product from "./Product";

const Container = styled.div`
background-color: antiquewhite;
`

const Title = styled.h1`
font-size: 70px;
display: flex;
align-items: center;
justify-content: center;
margin: 20px 0;
`

const Item = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
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
