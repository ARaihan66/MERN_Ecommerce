import React from 'react'
import styled from 'styled-components';
import { FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa'
import { mobile } from '../Responsive'

const Container = styled.div`
height:60px;
${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
padding:10px ;
display:flex;
justify-content:space-between;
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Center = styled.div`
flex:1;
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({ flex: "2", justifyContant: "center" })}
`
// Left div
const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
width: 80%;
display:flex;
align-items:center;
background-color: white;
margin-left:25px;
justify-content: space-between;
border: 1px solid lightgray;
`
const Input = styled.input`
border: none;
flex:7;
padding: 7px;
${mobile({ width: "50px", padding: '4px' })}
`
const Icon = styled.div`
margin-left: 24px;
flex:1;
border: none;
cursor: pointer;
${mobile({
    display: "flex",
    alignItem: "center",
    justifyContant: "center",
    margin: '0px 10px',
    fontSize: '12px'
})}
`

//Center div
const Logo = styled.h1`
font-weight : bold;
text-align: center;
letter-spacing:3px;
${mobile({ fontSize: "24px", marginLeft: '15px' })}
`

//Right div
const MenuItem = styled.div`
font-size: 14px;
cursor:pointer;
margin-left:15px;
font-size: ${props => props.fontSize};
${mobile({
    fontSize: "9px",
    marginLeft: "3px"
})}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Icon>
                            <FaSearch />
                        </Icon>
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo>
                        POLO'S
                    </Logo>
                </Center>

                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem fontSize='20px'><FaShoppingCart /></MenuItem>
                    <MenuItem fontSize='20px'><FaUser /></MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
