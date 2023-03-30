import styled from "styled-components";


export const Content=styled.div`

`;
export const ContentTitle=styled.div`
    width: 100%;
    height: 80px;
    background-color: var(--color-body-segundary);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
    h3{
        font-weight: 600;
        font-size: 34px;
    }
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
export const  Statebutton=styled.span`

background-color: #058C421f;
padding: 6px;
border-radius: 50%;
color: #058C42;
`;
export const  Statebuttontwo=styled.span`

background-color: #BA181B1f;
padding: 6px;
border-radius: 50%;
color: #BA181B;
`;

export const Contentdiv = styled.div`
  position: relative;
  height: 48px;
  /* margin: 20px 0px 10px 0px; */
  margin-bottom: 30px;
`;

export const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: 1rem;
  font-weight: 300;
  padding: 0 0.25rem;
  /* background-color: #fff; */
  color: var(--color-subtitle);
  font-size: 0.9rem;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Input = styled.input`
  position: absolute;
  border: 1px #929fac7e solid;
  font-family: "Poppins", sans-serif;
  border-radius: 7px;
  box-sizing: border-box;
  color:var(--color-title);
  width: 100%;
  padding: 13px 20px;
  font-size: 18px;
  z-index: 1;
  background: none;
  outline: none;
  &:focus {
    border: 2px solid #058C42;
  }
  &:focus + ${Label} {
    top: -0.5rem;
    left: 0.8rem;
    color: #058C42;
    font-size: 0.8rem;
    font-weight: 500;
    background-color:var(--color-body-segundary);
    z-index: 10;
  }
  &:not(:placeholder-shown)&:not(:focus) + ${Label} {
    top: -0.5rem;
    left: 0.8rem;
    font-size: 0.8rem;
    font-weight: 500;
    background-color:var(--color-body-segundary);
    z-index: 10;
  }
`;

export const ButtonAdd = styled.button`
width: 100px;
  border: none;
    padding: 10px 15px;
    border-radius: 8px;
    background-color: #058C42;
    color: white;
`;
export const ButtonCancel = styled.button`
width: 100px;
  border: none;
    padding: 10px 15px;
    border-radius: 8px;
    background-color: #BA181B1f;
    color: #BA181B;
`;
export const ContentButton=styled.div`
display: flex;
 gap: 20px;
 justify-content: end;
`;

export const ButtonDelete = styled.button`
  border: none;
    padding: 8px;
    border-radius: 8px;
    background-color: #BA181B1f;
    color: #BA181B;
    margin-left: 8px;
`;