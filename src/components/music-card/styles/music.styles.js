import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  border: 1px solid gray;
  border-radius: 5px;
  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

export const Cover = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  align-self: flex-start;
  @media screen and (max-width: 375px) {
    width: 120px;
    height: 120px;
    align-self: center;
    margin-top: 15px;
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  /* width: 100%; */
  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const Artist = styled.h4`
  font-size: 1.2rem;
  /* width: 100%; */
  margin-top: 5px;
  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const Album = styled.h4`
  font-size: 1rem;
  /* width: 100%; */
  margin-top: 30px;
`;

export const Duration = styled.h5`
  font-size: 0.9rem;
  margin-top: 10px;
`;

export const Preview = styled.button`
  background: url("/icons/play.svg") no-repeat center;
  background-color: white;
  opacity: 0.5;
  transition: 0.3s;
  border-radius: 15px;
  height: 30px;
  width: 30px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const Deezer = styled.button`
  background: url("/icons/deezer_logo.svg") no-repeat center;
  width: 100px;
  height: 30px;
  opacity: 0.5;
  transition: 0.3s;
  border: none;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const Separator = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  @media screen and (max-width: 375px) {
    margin-bottom: 35px;
  }
`;

export const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  @media screen and (max-width: 375px) {
    padding: 10px 5px;
    align-items: flex-start;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-right: 15px;
  @media screen and (max-width: 375px) {
    margin-top: 15px;
    height: 150px;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

export const AddButton = styled.button`
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
  }
`;

export const RemoveButton = styled.button`
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
  }
`;
