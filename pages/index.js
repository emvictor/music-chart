import { Header, MusicList } from "containers";
import { HomeContainer } from "components";
import { getMusicsData } from "lib";
import Link from "next/link";
import MusicCard from "../src/components/music-card";

export default function Home({ musicData }) {
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
                    <MusicCard.Deezer
                      target="_blank"
                      href={music.link}
                      title="Listen on Deezer"
                    ></MusicCard.Deezer>
                    <MusicCard.Preview title="Preview song"></MusicCard.Preview>
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
