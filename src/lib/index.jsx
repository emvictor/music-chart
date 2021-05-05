import axios from "axios";

const apiURL = "https://api.deezer.com/chart/0/tracks?limit=100";

export async function getMusicsData() {
  const Data = await axios.get(apiURL);
  const apiData = Data.data.data;
  // const musicsArr = apiData.data;
  return apiData;
}

export async function getMusicData(musicPosition) {
  const musics = await getMusicsData();
  const { title, link, duration, preview, artist, album, position } = musics[
    musicPosition - 1
  ];
  return {
    title,
    position,
    link,
    duration,
    preview,
    artist,
    album,
  };
}
