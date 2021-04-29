import { Header } from "components";

export default function HeaderContainer({ children, ...props }) {
  return (
    <Header {...props}>
      <Header.Wrapper {...props}>
        <Header.Logo src="./icons/logo.svg" />
      </Header.Wrapper>
      <Header.Title>Deezer Music Chart</Header.Title>
    </Header>
  );
}
