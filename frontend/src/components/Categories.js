import styled from "styled-components";
import { categories } from "./Data";
import CategoryItem from "./CategoryItem";
import { mobile } from '../Responsive'

const Container = styled.div`
background-color: antiquewhite;
`

const Title = styled.h1`
font-size: 70px;
display: flex;
align-items: center;
justify-content: center;
margin: 20px 0;
${mobile({ fontSize: "20px", paddingTop: "10px", marginBottom: "10px" })}
`
const Item = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
${mobile({ padding: "0px", flexDirection: "column" })};
`

const Categories = () => {
    return (
        <Container>
            <Title>NEW COLLECTION'S</Title>
            <Item>
                {categories.map(item => (
                    <CategoryItem item={item} />
                ))}
            </Item>

        </Container>
    )
}

export default Categories
