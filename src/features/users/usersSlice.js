import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '0', name: 'Dude Lebowski' },
    { id: '1', name: 'Lance Jared Cabiscuelas' },
    { id: '2', name: 'Dave Gray' }
];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;