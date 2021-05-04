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
  Separator,
  Metadata,
  Buttons,
  AddButton,
  RemoveButton,
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

MusicCard.Separator = function MusicCardSeparator({ children, ...props }) {
  return <Separator {...props}>{children}</Separator>;
};

MusicCard.Metadata = function MusicCardMetadata({ children, ...props }) {
  return <Metadata {...props}>{children}</Metadata>;
};

MusicCard.Buttons = function MusicCardButtons({ children, ...props }) {
  return <Buttons {...props}>{children}</Buttons>;
};

MusicCard.AddButton = function MusicCardAddButton({ children, ...props }) {
  return <AddButton {...props}>{children}</AddButton>;
};

MusicCard.RemoveButton = function MusicCardRemoveButton({
  children,
  ...props
}) {
  return <RemoveButton {...props}>{children}</RemoveButton>;
};
