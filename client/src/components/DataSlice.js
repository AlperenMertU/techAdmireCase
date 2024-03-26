import { createSlice } from '@reduxjs/toolkit';

export const DataSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    selectedUser: null,
    filteredUsers: [], 
  },

  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setFilteredUsers: (state, action) => { 
      state.filteredUsers = action.payload;
    },
  },

});

export const { setName, setSelectedUser, setFilteredUsers } = DataSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectSelectedUser = (state) => state.user.selectedUser;
export const selectFilteredUsers = (state) => state.user.filteredUsers; 
export default DataSlice.reducer;
