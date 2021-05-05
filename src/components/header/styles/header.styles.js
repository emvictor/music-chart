import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  background-color: rgba(99, 105, 209, 0.25);
`;

export const Logo = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  margin-left: 1rem;
  filter: invert(1);
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 10px 25px;
  width: 50%;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 9px;
  width: 25%;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: 1010px) {
    font-size: 1.25rem;
  }
  @media screen and (max-width: 870px) {
    font-size: 1rem;
    margin-top: 9px;
  }
`;
