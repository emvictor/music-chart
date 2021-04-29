import { Container, Wrapper, Button } from "./styles/list.styles";

export default function MusicList({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

MusicList.Wrapper = function MusicListWrapper({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
};

MusicList.Button = function MusicListButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
};
