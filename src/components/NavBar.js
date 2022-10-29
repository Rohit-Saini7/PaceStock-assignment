import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <Container>
      <NavbarWrap className='navbarWrap'>
        <Toolbar>
          <LogoBox>Assignment</LogoBox>
          <LogOutButton>Log Out</LogOutButton>
        </Toolbar>
      </NavbarWrap>
    </Container>
  );
}
export default Navbar;

const Container = styled.header`
  width: 80%;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  position: absolute;
  top: 3%;
  left: 10%;
  border-radius: 10px;
`;

const NavbarWrap = styled.div`
  max-width: 80%;
  margin: auto;
`;
const Toolbar = styled.div`
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoBox = styled.div`
  font-size: 2em;
  text-transform: uppercase;
`;

const LogOutButton = styled.button`
  outline: none;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  font-size: 1.1rem;
  letter-spacing: 0.1em;
  padding: 5px 10px;
  border-radius: 5px;
  transition: 0.2s;
  overflow: none;
  position: relative;

  &:hover {
    translate: 0 -2px;
    background-color: #7053bc;
  }
  &:active {
    translate: 0 5px;
  }
`;
