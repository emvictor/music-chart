import { SearchBar } from "components";

export default function SearchBarContainer({ children, ...props }) {
  return (
    <SearchBar {...props}>
      <SearchBar.Wrapper {...props}>
        <SearchBar.Button
          src="./icons/search-icon.svg"
          alt="Search Button before search bar"
        />
        <SearchBar.Input />
      </SearchBar.Wrapper>
    </SearchBar>
  );
}
