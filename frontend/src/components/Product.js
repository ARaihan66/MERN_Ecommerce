import styled from "styled-components"
import { FaShoppingCart, FaSearch, FaHeart } from 'react-icons/fa';


const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
left:0;
top:0;
background-color:gray;
z-index:3;
display:flex;
align-items:center;
justify-content:center;
background-color: rgba(0,0,0,0.2);
transition-duration:1s;
`

const Container = styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fdfd;
position:relative;

&:hover ${Info}{
    opacity:1;
}
`
const Image = styled.img`
width:80%;
height:75%;
z-index:2;
`

const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:5px;
cursor:pointer;
transition-duration:0.5s;

&:hover{
    background-color:#e9f5f5;
    transform:scale(1.3)
}
`

const Product = (props) => {
    console.log(props.item)
    return (
        <Container>
            <Image src={props.item.img} />
            <Info>
                <Icon>
                    <FaShoppingCart />
                </Icon>
                <Icon>
                    <FaSearch />
                </Icon>
                <Icon>
                    <FaHeart />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
