import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface User {
    id:number; name:string; email:string; password:string;
}
interface UserState {
    users: User[];
}
const initialState: UserState = {
    users: []
}
const userSlice = createSlice(
    {
        name: 'user', initialState,
        reducers: {
            addUsers: (state, action: PayloadAction<User>) => {
                state.users.push(action.payload)
            },
            displayUsers: (state, action: PayloadAction<User[]>) {
                state.users = action.payload
            }
        }
    }
)

export const {addUsers, displayUsers} =userSlice.actions
export default userSlice.reducer