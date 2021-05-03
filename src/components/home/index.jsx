import { Container } from "./styles/home.styles";

export default function HomeComponent({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
