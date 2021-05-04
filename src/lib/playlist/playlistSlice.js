import { createSlice } from "redux-toolkit";

export const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    value: [],
  },
  reducers: {
    addMusic: (state) => {
      state.value = value.push(music);
    },

    removeMusic: (state) => {
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

export default playlistSlice.reducer;
