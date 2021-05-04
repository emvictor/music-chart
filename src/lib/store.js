import { configureStore } from "redux-toolkit";
import playlistReducer from "./playlist/playlistSlice";

export default configureStore({
  reducer: {
    playlist: playlistReducer,
  },
});
