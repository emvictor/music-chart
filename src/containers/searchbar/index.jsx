import { SearchBar } from "components";

export default function SearchBarContainer({ children, ...props }) {
  return (
    <SearchBar.Container {...props}>
      <SearchBar.Wrapper {...props}>
        <SearchBar.Input placeholder="Search here"></SearchBar.Input>
        <SearcBar.Text>Click to Search:</SearcBar.Text>;
      </SearchBar.Wrapper>
      <SearchBar.Button src="/icons/search-icon.svg" alt="Search Button" />
    </SearchBar.Container>
  );
}
