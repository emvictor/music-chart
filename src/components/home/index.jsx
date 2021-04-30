import { Container } from "./styles/home.styles";

export default function Home({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
