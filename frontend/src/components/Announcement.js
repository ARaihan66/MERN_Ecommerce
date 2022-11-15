import styled from 'styled-components';
import { mobile } from '../Responsive';

const Container = styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-weight:500;
${mobile({ width: "380px" })}
`

const Announcement = () => {
    return (
        <Container>
            Super Deal!! Free Shipping on Orders Over 750$
        </Container>
    )
}

export default Announcement;
