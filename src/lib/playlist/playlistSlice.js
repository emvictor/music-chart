import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
  name: "playlist",
  initialState: [],
  reducers: {
    addMusic(state, action) {
      state.push(action.payload);
    },

    removeMusic(state, action) {
      state.filter((musics) => musics !== action.payload);
    },
  },
});

export const { addMusic, removeMusic } = playlistSlice.actions;

export const selectPlaylist = (state) => state.playlist;

export default playlistSlice.reducer;
