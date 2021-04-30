import { Container, Input, Button, Wrapper } from "./styles/searchbar.styles";

export default function SearchBar({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

SearchBar.Input = function SearchBarInput({ children, ...props }) {
  return <Input {...props}>{children}</Input>;
};

SearchBar.Button = function SearchBarButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
};

SearchBar.Wrapper = function SearchBarWrapper({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
};
