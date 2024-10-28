import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../helpers/types/dto/user.type";

export type AuthState = {
	isAuthenticated: boolean;
	user: null | User;
};

const initialState: AuthState = {
	isAuthenticated: false,
	user: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login(state, action: PayloadAction<User>) {
			state.isAuthenticated = true;
			state.user = action.payload;
		},
		logout(state) {
			state.isAuthenticated = false;
			state.user = null;
		},
	},
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
