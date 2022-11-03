import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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
`

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

                <Center>Center</Center>
                <Right>Right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
