import { HomeContainer, MusicCard } from "components";
import { Header, MusicList } from "containers";
import { removeMusic } from "../../src/lib/playlist/playlistSlice";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Playlist({}) {
  const musics = useSelector((state) => state.playlist);
  return (
    <HomeContainer>
      <Header />
      <MusicList>
        <MusicCard key={musics.id}>
          {musics.map((music) => (
            <>
              <MusicCard.Separator>
                <MusicCard.Wrapper>
                  <MusicCard.Cover src={music.album.cover} />
                  <MusicCard.Metadata>
                    <MusicCard.Title key={music.id}>
                      {music.title}
                    </MusicCard.Title>
                    <MusicCard.Artist>{music.artist.name} </MusicCard.Artist>
                    <MusicCard.Album>
                      {" "}
                      {">"} {music.album.title}{" "}
                    </MusicCard.Album>
                    <MusicCard.Duration>
                      {music.duration} seconds
                    </MusicCard.Duration>
                  </MusicCard.Metadata>
                  <MusicCard.Buttons>
                    <Link href={music.link}>
                      <MusicCard.Deezer title="Listen on Deezer"></MusicCard.Deezer>
                    </Link>
                    <Link href={music.preview}>
                      <MusicCard.Preview title="Preview song"></MusicCard.Preview>
                    </Link>
                  </MusicCard.Buttons>
                </MusicCard.Wrapper>
              </MusicCard.Separator>
            </>
          ))}
        </MusicCard>
      </MusicList>
    </HomeContainer>
  );
}
