import { MusicList } from "components";

export default function MusicListContainer({ children, ...props }) {
  return (
    <MusicList>
      <MusicList.Wrapper></MusicList.Wrapper>
    </MusicList>
  );
}
