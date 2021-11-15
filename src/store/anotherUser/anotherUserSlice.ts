import {
	createAsyncThunk,
	createSlice,
} from '@reduxjs/toolkit';

const initialAnotherUser = {
	login: '',
	name: '',
	location: '',
	followers: 0,
	following: 0,
	public_repos: 0,
	email: '',
	avatar_url: '',
	bio: '',
	node_id: '',
    description:'',
    stargazers_count: 0,
	isLogged: false
}

export const getAnotherUserAsync = createAsyncThunk(
	'anotherUser/getAnotherUserAsync',
	async (name: string) => {
		const resp = await fetch(`https://api.github.com/users/${name}`);
		try {
			const respJSON = (await resp.json());
			if (resp.ok) {
				const anotherUser = {
					login: respJSON.login,
					name: respJSON.name,
					location: respJSON.location,
					followers: respJSON.followers,
					following: respJSON.following,
					public_repos: respJSON.public_repos,
					email: respJSON.email,
					avatar_url: respJSON.avatar_url,
					bio: respJSON.bio,
					node_id: respJSON.node_id,
					description:respJSON.description,
					stargazers_count: respJSON.stargazers_count,
					isLogged: true
				}
				return anotherUser;
			}
			else {
				return initialAnotherUser
			}
		}
		catch (e) {
			console.log(e)
		}
	}
);


export const anotherUserSlice = createSlice({
	name: 'anotherUser',
	initialState: initialAnotherUser,
	reducers: {
		getAnotherUser: (state, { payload }) => {
			return { ...state, isLogged: true, ...payload }
		},
		logout: (state, { payload }) => {
			return initialAnotherUser
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAnotherUserAsync.fulfilled, (state, action) => {
				return action.payload
			})
	}
});

export const { getAnotherUser, logout } = anotherUserSlice.actions;


export default anotherUserSlice.reducer;
