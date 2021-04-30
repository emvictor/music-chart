import axios from "axios";

const apiURL = "https://api.deezer.com/chart/0/tracks?limit=3";

export async function getMusicsData() {
  const Data = await axios.get(apiURL);
  const apiData = Data.data;
  const musicsArr = apiData.data;
  return musicsArr;
}

export async function getMusicsPosition() {
  const musics = await getMusicsData();
  const position = musics.map((i) => {
    return i.position;
  });
  return console.log(position);
}

export async function getMusicData(musicPosition) {
  const musics = await getMusicsData();
  const { title, link, duration, preview, artist, album, position } = musics[
    musicPosition - 1
  ];
  return console.log({
    title,
    position,
    link,
    duration,
    preview,
    artist,
    album,
  });
}

export async function getMusicArtist(musicPosition) {
  const musics = await getMusicsData();
}
