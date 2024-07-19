import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.list.unshift(action.payload);
    },

    addRemovingStatus: (state) => {
      for (let i = state.list.length - 1; i >= 0; i--) {
        if (!state.list[i].removing) {
          state.list[i].removing = true;
          break;
        }
      }
    },
    
    removeElement: (state) => {
      state.list = state.list.filter((item) => !item.removing);
    },
  },
});

export const { addElement, removeElement, addRemovingStatus } =
  listSlice.actions;

export default listSlice.reducer;
