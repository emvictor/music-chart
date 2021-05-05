import { Header } from "components";
import { SearchBar } from "containers";
import Link from "next/link";
export default function HeaderContainer({ children, ...props }) {
  return (
    <Header {...props}>
      <Link href="/">
        <Header.Logo src="./icons/logo.svg" />
      </Link>
      <Link href="/">
        <Header.Title>Deezer Music Chart</Header.Title>
      </Link>

      <Header.Wrapper {...props}>
        <SearchBar />
      </Header.Wrapper>
    </Header>
  );
}
