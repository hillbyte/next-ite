import PropType from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
body {
  padding: 0 ;
  margin: 0;
  line-height: 2;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
}
 html {
  box-sizing: border-box;
  font-size: 62.5%;
--red: #FF0000;
--black: #000;
--grey: #3A3A3A;
--light-grey: #E1E1E1;
--off-white: #EDEDED;
--maxWidth: 1000px;
--font-size: 1.6rem;
--bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09); 

 }
 *, *:before, *:after {
  box-sizing: inherit;
}
a:hover{
  text-decoration: underline;
}
a{
  text-decoration: none;
  color: var(--black);
}
button {
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
}
`;
const InnerStyle = styled.div`
  max-width: var(--maxWidth, 1000px);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <InnerStyle>{children}</InnerStyle>
    </div>
  );
}

Page.propTypes = {
  children: PropType.any,
};
