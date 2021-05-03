import { MusicList } from "components";

export default function MusicListContainer({ children, ...props }) {
  return (
    <MusicList>
      <MusicList.Wrapper {...props}>{children}</MusicList.Wrapper>
    </MusicList>
  );
}
