import {
  Container,
  Wrapper,
  Cover,
  Title,
  Artist,
  Album,
  Duration,
  Preview,
  Deezer,
} from "./styles/music.styles";

export default function MusicCard({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

MusicCard.Wrapper = function MusicCardWrapper({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
};

MusicCard.Cover = function MusicCardCover({ children, ...props }) {
  return <Cover {...props} />;
};

MusicCard.Title = function MusicCardTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

MusicCard.Artist = function MusicCardArtist({ children, ...props }) {
  return <Artist {...props}>{children}</Artist>;
};

MusicCard.Album = function MusicCardAlbum({ children, ...props }) {
  return <Album {...props}>{children}</Album>;
};

MusicCard.Preview = function MusicCardPreview({ children, ...props }) {
  return <Preview {...props}>{children}</Preview>;
};

MusicCard.Duration = function MusicCardDuration({ children, ...props }) {
  return <Duration {...props}>{children}</Duration>;
};

MusicCard.Deezer = function MusicCardDeezer({ children, ...props }) {
  return <Deezer {...props}>{children}</Deezer>;
};
