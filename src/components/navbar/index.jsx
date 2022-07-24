import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './styles.css'

const NavBarG = () => {
  return (
    <Navbar  expand="lg" className="navbar">
      <Container>
        <Navbar.Brand><Link to={'/'}>E-commerce</Link></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
            <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
            <Nav.Link><Link to='/checkout'>Carrinho</Link></Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to={'categoria/electronics'}>Eletronicos</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="categoria/jewelery">Joias</Link></NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="categoria/men's clothing">Roupas Masculinas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="categoria/women's clothing">Roupas Femininas</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarG;
