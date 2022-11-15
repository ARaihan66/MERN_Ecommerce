import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { MdAdd, MdRemove } from 'react-icons/md';
import { mobile } from '../Responsive';


const Container = styled.div`

`
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({
    diaplay: 'flex',
    flexDirection: 'column',
    padding: '15px'
})}
`
const ImgContainer = styled.div`
flex:1;
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({
    height: '40%'
})}
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 20px;

${mobile({
    padding: '0px 10px',
})}
`
const Title = styled.h1`
font-weight: 300;
${mobile({
    fontSize: '18px',
    marginTop: '20px'
})}
`
const Description = styled.p`
margin: 10px 0px;
text-align: justify;
${mobile({
    fontSize: '16px',
})}
`
const Price = styled.span`
font-weight:100;
font-size:40px;
${mobile({
    fontSize: '18px'
})}
`
const FilterContainer = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
width: 50%;
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
margin: 0px 10px;
font-size: 20px;
font-weight: 200;
${mobile({
    fontSize: '16px'
})}
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterSizeOption = styled.select`
margin-left:10px;
padding: 5px;
`
const FilterOption = styled.option`
padding: 10px;
`
const AddCointainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({
    width: '90%'
})}
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
font-weight: 700;
cursor: pointer;
border-radius: 5px;
&:hover{
    background-color: #f8f4f4;
}
`


const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://images.pexels.com/photos/5797579/pexels-photo-5797579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        Denim Jumpsuit
                    </Title>
                    <Description>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </Description>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>
                                Color
                            </FilterTitle>
                            <FilterColor color='black' />
                            <FilterColor color='darkblue' />
                            <FilterColor color='gray' />
                        </Filter>
                        <Filter>
                            <FilterTitle>
                                Size:
                            </FilterTitle>
                            <FilterSizeOption>
                                <FilterOption>XS</FilterOption>
                                <FilterOption>S</FilterOption>
                                <FilterOption>L</FilterOption>
                                <FilterOption>M</FilterOption>
                                <FilterOption>XL</FilterOption>
                                <FilterOption>XXL</FilterOption>
                            </FilterSizeOption>
                        </Filter>
                    </FilterContainer>
                    <AddCointainer>
                        <AmountContainer>
                            <MdAdd />
                            <Amount>1</Amount>
                            <MdRemove />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddCointainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
