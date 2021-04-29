import { Container, Input, Button } from "./styles/searchbar.styles";

export default function Searchbar({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Searchbar.Input = function SearchbarInput({ children, ...props }) {
  return <Input {...props}>{children}</Input>;
};

Searchbar.Button = function SearchbarButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
};

Searchbar.Wrapper = function SearchbarWrapper({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
};

Searchbar.Title = function SearchbarTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};
