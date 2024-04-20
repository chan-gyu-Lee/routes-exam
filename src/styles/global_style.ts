import { css } from "@emotion/react";
export const GlobalStyle = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    font-family: "Pretendard";
    font-display: fallback;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    margin: 0px;
    padding: 0px;
    overflow-y: auto;
    line-height: 1.4;
    -ms-overflow-style: none;
    background-color: #f6f7f9;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  caption {
    margin: 0;
    padding: 0;
    font-size: inherit;
    white-space: pre-line;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }

  button {
    border: none;
    outline: none;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    cursor: pointer;
  }

  input {
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input:focus {
    outline: none;
  }

  .card-header {
    padding: 16px;
    background-color: #fff;
    font-weight: 500;
  }
`;
