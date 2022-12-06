import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../Responsive'
import { useLocation } from 'react-router-dom';


const Container = styled.div`

`
const Title = styled.h1`
margin: 20px;
${mobile({
    fontSize: '18px'
})}
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
${mobile({
    display: 'flex',
    flexDirection: 'column'
})}
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
${mobile({
    fontSize: '16px'
})}
`
const Select = styled.select`
padding: 10px;
margin: 0px 20px;
${mobile({
    margin: '10px'
})}
`

const Option = styled.option`

`

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Green</Option>
                        <Option>Yellow</Option>
                        <Option>Balck</Option>
                        <Option>Voilet</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
