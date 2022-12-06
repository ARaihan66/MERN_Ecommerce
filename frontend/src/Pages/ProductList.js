import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../Responsive'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


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
    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState('newest')
    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const handleFilters = (event) => {
        setFilter({
            ...filters,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name='color' onChange={handleFilters}>
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
                    <Select name='size' onChange={handleFilters}>
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
                    <Select onChange={(event) => setSort(event.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
