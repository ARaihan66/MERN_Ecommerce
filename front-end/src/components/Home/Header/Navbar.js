import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from '../../../Picture/Cart.png';
import User from '../../../Picture/User.png';


const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Evaly</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav className="me-auto my-2 my-lg-0">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="#action3">Products</Nav.Link>
                        <Nav.Link href="#action4">Offers</Nav.Link>
                        <Nav.Link href="#action5">Contact</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    <Nav>
                        <Nav.Link href="#action6"><img src={Cart} style={{ height: '30px', width: '30px' }} /></Nav.Link>
                        <Nav.Link href="#action7"><img src={User} style={{ height: '30px', width: '30px' }} /></Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;