import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from './constants';

type StyleProps = {
  theme: typeof DefaultTheme;
};

export const GlobalStyle = createGlobalStyle<StyleProps>`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  };
  body {
    font-family: sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  };
  h1 {
    text-transform: uppercase;
  };
  h3 {
    margin: 15px;
    font-weight: 500;
  };
  h5 {
    color: ${(props) => props.theme.postTitle};
    margin: 60px 0 20px 0;
    font-size: 1.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &::first-letter {
      text-transform:capitalize;
    }
  };
  p {
    &::first-letter {
      text-transform:capitalize;
    }
  };
   a {
    color: ${(props) => props.theme.postTitle};
    text-transform: capitalize;
  };
  button {
    background-color: ${(props) => props.theme.postTitle};
    color: ${(props) => props.theme.buttonText};
    display: block;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    border-radius: 10px;
  };
  img {
    height: 80px;
    border-radius: 40px;
  };
  footer {
    margin: 60px 0 20px 0;
  }; 
`;
