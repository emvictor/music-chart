import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  width: 100%;
  height: 25px;
  padding: 0 15px;
  background-color: rgba(25, 25, 25, 0.25);
  border: none;
  &:focus {
    outline: none;
    background-color: white;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 500px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.img`
  width: 27px;
  height: 27px;
  margin: 0 5px;
  filter: invert(1);
`;
