import {
	createAsyncThunk,
	createSlice,
	Middleware
} from '@reduxjs/toolkit';

import { toast } from 'react-toastify'

const initialUser = {
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

export const getUserAsync = createAsyncThunk(
	'user/getUserAsync',
	async (name: string) => {
		const resp = await fetch(`https://api.github.com/users/${name}`);
		handleStatus(resp.status | 0)
		try {
			if (resp.ok) {
				const respJSON = (await resp.json());
				const user = {
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
				return user;
			}
			else {
				return initialUser
			}
		}
		catch (e) {
			console.log(e)
		}
	}
);


const handleStatus = (status: number) => {
	if (status === 200) {
		toast.success(`Usuário logado`, {
			position: "top-center",
			autoClose: 1500,
		})
	}
	if (status === 404) {
		toast.error('Usuário não encontrado', {
			autoClose: 3000,
		})
	}
	if (status === 403) {
		toast.error('Limite de tentativas excedido', {
			autoClose: 3000,
		})
	}
	if (status === 0) {
		toast.error('Ocorreu um problema na rede', {
			autoClose: 3000,
		})
	}
}

export const confirmFindUserMiddleware:Middleware = (store) => (next) => (action) => {
	if (action.type === 'user') {
	  if (window.confirm("Você deseja realmente excluir ?")) {
		next(action);
	  }
	} else {
	  next(action);
	}
  };

export const userSlice = createSlice({
	name: 'user',
	initialState: initialUser,
	reducers: {
		changeUser: (state, { payload }) => {
			return { ...state, isLogged: true, ...payload }
		},
		logout: () => {
			return initialUser
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUserAsync.fulfilled, (state, action) => {
				return action.payload
			})
	}
});

export const { changeUser, logout } = userSlice.actions;


export default userSlice.reducer;
