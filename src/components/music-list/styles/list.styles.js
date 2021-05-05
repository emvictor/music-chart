import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 100px;
  justify-content: center;
  flex-direction: row;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 100px;
  align-self: flex-end;
  margin-bottom: 20px;
  background: none;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  border: 1px solid white;
  border-radius: 5px;
  opacity: 0.5;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: black;
    background: white;
    border: 1px solid black;
  }
`;
