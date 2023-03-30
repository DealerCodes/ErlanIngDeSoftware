import styled, { css } from "styled-components";

export const ContentMain=styled.div`
background-color: var(--color-body-primary);

`;

export const Contentbody=styled.div`
  position: relative;
  left: 0px;
  width: 100%;
  transition: all 0.32s ease;
  ${(props) =>
    props.open &&
    css`
      left: 270px;
      width: calc(100% - 270px);
    `}
  ${(props) =>
    props.view &&
    css`
      left: 0px;
      width: 100%;
    `}

`;
export const  Content=styled.div`
 margin: 5%;
`;