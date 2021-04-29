import { Container, Logo, Wrapper, Title } from "./styles/header.styles";

export default function Header({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ children, ...props }) {
  return <Logo {...props} />;
};

Header.Wrapper = function HeaderWrapper({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
};

Header.Title = function HeaderTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};
