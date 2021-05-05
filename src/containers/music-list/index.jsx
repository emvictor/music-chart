import { MusicList } from "components";
import Link from "next/link";

export default function MusicListContainer({ children, ...props }) {
  return (
    <MusicList>
      <MusicList.Wrapper {...props}>
        <Link href="/playlist">
          <MusicList.Button>Playlist</MusicList.Button>
        </Link>
        {children}
      </MusicList.Wrapper>
    </MusicList>
  );
}
