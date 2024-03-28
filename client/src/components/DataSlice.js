import { createSlice } from '@reduxjs/toolkit';

export const DataSlice = createSlice({

  name: 'user',
  initialState: {
    name: '',
    selectedUser: null,
    filteredUsers: [],
    noData: false
  },
   

  //all procces do it with dataReducers
  reducers: {
    setFilteredUsers: (state, action) => {
      state.filteredUsers = action.payload;
    },
    setNoData: (state, action) => {
      state.noData = action.payload;
    }
  },

});

export const { setName, setSelectedUser, setFilteredUsers, setNoData } = DataSlice.actions;

//state managment with reducers
export const selectName = (state) => state.user.name;
export const selectFilteredUsers = (state) => state.user.filteredUsers;
export const selectNoData = (state) => state.user.noData;

export default DataSlice.reducer;

