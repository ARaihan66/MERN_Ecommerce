import styled from "styled-components";
import { categories } from "./Data";
import CategoryItem from "./CategoryItem";

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
display:flex;
padding:20px;
justify-content:space-between;
`

const Categories = () => {
    return (
        <Container>
            <Title>NEW PRODUCTS</Title>
            <Item>
                {categories.map(item => (
                    <CategoryItem item={item} />
                ))}
            </Item>

        </Container>
    )
}

export default Categories
