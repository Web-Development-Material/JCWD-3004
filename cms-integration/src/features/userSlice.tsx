import {PayloadAction,createSlice} from '@reduxjs/toolkit';

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

interface UserState {
    users: User[];
}
const initialState: UserState = {
    users: [];
}