import { Header } from "containers";
import { HomeContainer, MusicCard } from "components";
import { getMusicsData } from "lib";
import Link from "next/link";

export default function Home({ musicData }) {
  function playAudio() {
    var audio = document.getElementById("a1");
    return audio.play;
  }

  return (
    <HomeContainer>
      <Header />
      <MusicCard key={musicData.id}>
        {musicData.map((music) => (
          <>
            <MusicCard.Cover src={music.album.cover} />
            <MusicCard.Wrapper>
              <MusicCard.Title key={music.id}>
                {music.title} - {music.position}
              </MusicCard.Title>
              <MusicCard.Artist>{music.artist.name}</MusicCard.Artist>
              <MusicCard.Duration>{music.duration}</MusicCard.Duration>
              <MusicCard.Album>{music.album.title}</MusicCard.Album>
            </MusicCard.Wrapper>
            <MusicCard.Wrapper>
              <Link href={music.link}>
                <MusicCard.Deezer>{music.link}</MusicCard.Deezer>
              </Link>
              <MusicCard.Preview
                id="a1"
                onClick={playAudio}
                src={music.preview}
              >
                {music.preview}
              </MusicCard.Preview>
            </MusicCard.Wrapper>
          </>
        ))}
      </MusicCard>
      <p>oi</p>
    </HomeContainer>
  );
}

export async function getServerSideProps() {
  const musicData = await getMusicsData();
  return {
    props: { musicData },
  };
}
