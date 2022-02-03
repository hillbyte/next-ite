import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

// Styled Components
const Logo = styled.h1`
  font-size: 3rem;
  background: brown;
  position: relative;
  margin-left: 2rem;
  a {
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }
`;
const StyledHeader = styled.header`
  .bar {
    border-bottom: 5px solid #000;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;
function Header() {
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link href="/">React</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </StyledHeader>
  );
}
export default Header;
