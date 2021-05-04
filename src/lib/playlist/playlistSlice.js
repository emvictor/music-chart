import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
  name: "playlist",
  initialState: [{}],
  reducers: {
    addMusic(state, action) {
      state.push(action.payload);
    },

    removeMusic(state) {
      const removeIndex = state.value
        .map(function (item) {
          return item.id;
        })
        .indexOf(music.id);
      state.value = value.splice(removeIndex, 1);
    },
  },
});

export const { addMusic, removeMusic } = playlistSlice.actions;

export const selectPlaylist = (state) => state.playlist.value;

export default playlistSlice.reducer;
