import { Header } from "containers";
import { HomeContainer, MusicCard } from "components";
import { getMusicsData, getMusicsPosition, getMusicData } from "lib";

export default function Home() {
  getMusicsPosition();
  return (
    <HomeContainer>
      <Header />
      {/* <MusicCard>
        {musicData.map((music) => (
          <>
            <MusicCard.Cover />
            <MusicCard.Wrapper>
              <MusicCard.Title>{music.title}</MusicCard.Title>
              <MusicCard.Artist></MusicCard.Artist>
              <MusicCard.Duration></MusicCard.Duration>
              <MusicCard.Album></MusicCard.Album>
            </MusicCard.Wrapper>
            <MusicCard.Wrapper>
              <MusicCard.Preview></MusicCard.Preview>
              <MusicCard.Deezer></MusicCard.Deezer>
            </MusicCard.Wrapper>
          </>
        ))}
      </MusicCard> */}
      <p>oi</p>
    </HomeContainer>
  );
}

// export async function getServerSideProps() {
//   const musicData = await getMusicsData();
//   return {
//     props: { musicData },
//   };
// }
