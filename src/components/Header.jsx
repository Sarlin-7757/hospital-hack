import React from 'react';
import styled from 'styled-components';

// Styled component for the header
const HeaderContainer = styled.header`
  background-color: #000; // Black background color
  color: #fff; // Text color
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header = () => {
    
  return (
    <HeaderContainer>
      <h1>heAlthFirst.com</h1>
      <p style={{fontSize:"20px"}}>Best care for you and your loved ones.</p>
    </HeaderContainer>
  );
};

export default Header;
