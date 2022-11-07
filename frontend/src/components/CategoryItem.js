import styled from "styled-components";

const Container = styled.div`
flex:1;
margin:5px;
height:70vh;
position:relative;

&:hover{
    opacity: 0.9;
}
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
`
const Info = styled.div`
position:absolute;
top:0;
bottom:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Title = styled.h1`
color:white;
margin-bottom:20px;
`
const Button = styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;

&:hover{
    color: white;
    background-color: teal;
}
`

const CategoryItem = (props) => {
    return (
        <Container>
            <Image src={props.item.img} />
            <Info>
                <Title>{props.item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>

        </Container>
    )
}

export default CategoryItem;
