import { Header } from "components";
import { SearchBar } from "containers";
import Link from "next/link";
export default function HeaderContainer({ children, ...props }) {
  return (
    <Header {...props}>
      <Header.Logo src="./icons/logo.svg" />
      <Link href="/playlist">Playlist</Link>
      <Header.Title>Deezer Music Chart</Header.Title>
      <Header.Wrapper {...props}>
        <SearchBar />
      </Header.Wrapper>
    </Header>
  );
}
