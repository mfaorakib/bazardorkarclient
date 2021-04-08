import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const navStyle={
        paddingLeft:'20px',
        paddingRight:'25px',
        color: 'white',
        fontWeight: 'bold'
    }
    return (
            <div>
             
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">

                 <Nav>
                <Navbar.Brand to="#home"> <p class="h4"> Bazar Dorkar</p> </Navbar.Brand>
                </Nav>
                <Nav className="d-flex justify-content-end">
                    <Nav.Item>
                        <Link style={navStyle}  to="/home">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link style={navStyle} to="/Orders">Orders</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link  style={navStyle} to="/Admin" eventKey="Admin">Admin</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link  style={navStyle} to="/Deals" eventKey="Deals">Deals</Link>
                    </Nav.Item>
                    <Nav.Item> 
                            <Link  style={navStyle} to ="/LogIn" eventKey="LogIn">Login </Link>
                            
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>

                </Navbar>
               
            </div>
    )     
}

export default Header;