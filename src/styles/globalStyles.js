import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}

body {
  font-family: sans-serif;
  background-color: ${colors.primaryDarkColor};
  color: ${colors.primaryDarkColor};
}

html, body, #root {
  height: 100%;
}

button {
  cursor: pointer;
  background-color: ${colors.primaryColor};
  padding: 10px 20px;
  border-radius: 4px;
  color: #fff;
  border: none;
  font-weight: 700;
}

a {
  text-decoration: none;
  color: ${colors.primaryColor};
}

ul {
  list-style: none;
}

.Toastify__progress-bar-theme--light.Toastify__progress-bar--success {
  background: ${colors.successColor};
}

.Toastify__toast-icon > svg {
  fill: ${colors.successColor}
}
`;

export const Container = styled.section`
  max-width: 360px;
  background-color: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
