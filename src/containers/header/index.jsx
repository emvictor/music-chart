import { Header } from "components";
import { SearchBar } from "containers";

export default function HeaderContainer({ children, ...props }) {
  return (
    <Header {...props}>
      <Header.Logo src="./icons/logo.svg" />
      <Header.Title>Deezer Music Chart</Header.Title>
      <Header.Wrapper {...props}>
        <SearchBar />
      </Header.Wrapper>
    </Header>
  );
}
