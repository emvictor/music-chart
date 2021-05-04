import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./playlist/playlistSlice";

export default configureStore({
  reducer: {
    playlist: playlistReducer,
  },
});
