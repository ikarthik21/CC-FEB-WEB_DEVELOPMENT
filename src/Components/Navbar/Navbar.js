import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Resume from './Resume.pdf';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  cursor: 'pointer',
};

const Navbar = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 70;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scroll]);

  return (
    <>
      <Nav scroll={scroll}>
        <Logo>
        <Link to="/" style={linkStyle}>
        <img src="/images/logo.png" alt="" /> </Link>
         
        </Logo>
        <Menu>
          <Link to="/home" style={linkStyle}>
            <li>Home</li>
          </Link>
          <Link to="/about" style={linkStyle}>
            <li>About</li>
          </Link>
          <Link to="/projects" style={linkStyle}>
            <li>Projects</li>
          </Link>
          <Link to="/contact" style={linkStyle}>
            <li>Contact</li>
          </Link>
          <a href={Resume} style={linkStyle} download={Resume}>
            <li>Resume</li>
          </a>
        </Menu>
      </Nav>
    </>
  );
};

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  border-radius: 3px;
  background-color: ${(props) => (props.scroll ? 'transparent' : '#222222')};
  transition: background-color 0.5s ease;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 60px;
  }
`;

const Menu = styled.div`
  display: flex;
  font-family: san-serif;
  align-items: center;

  li {
    list-style: none;
    font-family: 'Poppins', sans-serif;
    margin: 10px 10px;
    padding: 10px 15px;
    cursor: pointer;
    &:hover {
      border-bottom: 4px solid #67c0bb;
      border-radius: 5px;
    }
  }
`;

export default Navbar;
