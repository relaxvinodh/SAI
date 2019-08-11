import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../logo.jpeg';

// const Container = styled.div`
//   width: 100%;
// `;

const HeaderContainer = styled.div`
  min-height: 50px;
  box-shadow: 0 5px 10px -10px rgba(0, 0, 0, 0.6);
  background-color: rgba(255,255,255,0.95);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderRow = styled(Row)`
  height: 30px;
`;

const Navbar = styled(Col)`
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Nav = styled.div`
  flex: 1 0 0px;
  &:hover {
    border-bottom: 3px solid #393492;
    cursor: pointer;
  }
`;

const NavLogo = styled.img`
  width: 100px;
`;

const Header = () => (
  <HeaderContainer>
    <Container>
    <HeaderRow>
      <Col xs={3}>
        <NavLogo 
          src={logo}
        />
      </Col>
      <Navbar xs={6}>
          <Nav>
            <a href="#">About Us</a>
          </Nav>
          <Nav>
            <a href="#">Services</a>
          </Nav>
          <Nav>
            <a href="#">Partners</a>
          </Nav>
          <Nav>
            <a href="#">Customers</a>
          </Nav>
          <Nav>
            <a href="#">Contact Us</a>
          </Nav>
      </Navbar>
    </HeaderRow>
    </Container>
  </HeaderContainer>
);

export default Header;
