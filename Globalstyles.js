import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --body-font:'Roboto Condensed', sans-serif;;
  --color-body-primary:#F1F3F5;
  --color-body-segundary:#FFFF;
  --color-title:#212B36;
  --color-subtitle:#80868b;
}

body {
  margin: 0;
  background-color:var(--color-body-primary);
  font-family: var(--body-font);
  transition: all 0.25s ease;
}

`;
