import { createSlice } from '@reduxjs/toolkit';

export const DataSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    selectedUser: null,
    filteredUsers: [], 
    noData:false
  },

  reducers: {
   /*  setName: (state, action) => {
      state.name = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    }, */
    setFilteredUsers: (state, action) => { 
      state.filteredUsers = action.payload;
    },
    setNoData: (state, action) => { 
      state.noData = action.payload;
    }
  },

});

export const { setName, setSelectedUser, setFilteredUsers, setNoData } = DataSlice.actions;
//export const selectUserName = (state) => state.user.name;
//export const selectSelectedUser = (state) => state.user.selectedUser;
export const selectFilteredUsers = (state) => state.user.filteredUsers; 
export const selectNoData = (state) => state.user.noData; 

export default DataSlice.reducer;

