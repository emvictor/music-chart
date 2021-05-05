import { Header, MusicList } from "containers";
import { HomeContainer, MusicCard } from "components";
import { getMusicsData } from "lib";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addMusic } from "../src/lib/playlist/playlistSlice";

export default function Home({ musicData }) {
  const dispatch = useDispatch();

  return (
    <HomeContainer>
      <Header />
      <MusicList>
        <MusicCard key={musicData.id}>
          {musicData.map((music) => (
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
                    <MusicCard.AddButton
                      onClick={() => dispatch(addMusic(music))}
                    >
                      {"Add to Playlist <3"}
                    </MusicCard.AddButton>
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

export async function getServerSideProps() {
  const musicData = await getMusicsData();
  return {
    props: { musicData },
  };
}
