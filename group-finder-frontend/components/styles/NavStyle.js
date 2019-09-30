import styled from 'styled-components';

const NavStyle = styled.div`
  nav {
    text-align: center;
    box-shadow: 0 5px 6px #ccc;
  }
  ul {
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
  }
  nav > ul {
    padding: 4px 10px 10px;
  }
  li {
    display: flex;
    padding: 6px 8px;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-size: 13px;
  }
`;

export default NavStyle;
