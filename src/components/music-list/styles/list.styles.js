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

export const Button = styled.button``;
