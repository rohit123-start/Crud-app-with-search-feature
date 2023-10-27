import { createSlice } from "@reduxjs/toolkit";
import members from "../../component/Api";

const celebritySlice = createSlice({
    name:'celebrity',
    initialState: [members],
    reducers: {
        updatedMembers : (state,action) => {
            return action.payload
        }
    }
})

export const {updatedMembers} = celebritySlice.actions

export default celebritySlice