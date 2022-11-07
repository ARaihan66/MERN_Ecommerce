import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
height:60px;
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
`
// Left div
const Language = styled.span`
font-size:14px;
cursor:pointer;
`

const SearchContainer = styled.div`
border: 1px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`
const Input = styled.input`
border:none;
`

//Center div
const Logo = styled.h1`
font-weight : bold;
text-align: center;
letter-spacing:3px;
`

//Right div
const MenuItem = styled.div`
font-size: 14px;
cursor:pointer;
margin-left:15px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input></Input>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo>
                        POLO.
                    </Logo>
                </Center>

                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem><FontAwesomeIcon icon={faCartShopping} /></MenuItem>
                    <MenuItem><FontAwesomeIcon icon={faUser} /></MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
