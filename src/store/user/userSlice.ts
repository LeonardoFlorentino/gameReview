import {
	createAsyncThunk,
	createSlice,
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
			const respJSON = (await resp.json());
			if (resp.ok) {
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

// export const addTodoAsync = createAsyncThunk(
// 	'todos/addTodoAsync',
// 	async (payload: todoProps) => {
// 		const resp = await fetch('http://localhost:7000/todos', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({ title: payload.title }),
// 		});

// 		if (resp.ok) {
// 			const todo = await resp.json();
// 			return { todo } as todoProps;
// 		}
// 	}
// );

// export const toggleCompleteAsync = createAsyncThunk(
// 	'todos/completeTodoAsync',
// 	async (payload: todoProps) => {
// 		const resp = await fetch(`http://localhost:7000/todos/${payload.id}`, {
// 			method: 'PATCH',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({ completed: payload.completed }),
// 		});

// 		if (resp.ok) {
// 			const todo = await resp.json();
// 			return { todo } as todoProps;
// 		}
// 	}
// );

// export const deleteTodoAsync = createAsyncThunk(
// 	'todos/deleteTodoAsync',
// 	async (payload: todoProps) => {
// 		const resp = await fetch(`http://localhost:7000/todos/${payload.id}`, {
// 			method: 'DELETE',
// 		});

// 		if (resp.ok) {
// 			return { id: payload.id };
// 		}
// 	}
// );

export const handleStatus = (status: number) => {
	if (status === 200) {
		toast.success(`Usuário logado`, {
			autoClose: 3000,
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


export const userSlice = createSlice({
	name: 'user',
	initialState: initialUser,
	reducers: {
		changeUser: (state, { payload }) => {
			return { ...state, isLogged: true, ...payload }
		},
		logout: (state, { payload }) => {
			return initialUser
		}
		// toggleComplete: (state: Array<todoProps>, action: PayloadAction<todoProps>) => {
		// 	const index = state.findIndex((todo) => todo.id === action.payload.id);
		// 	state[index].completed = action.payload.completed;
		// },
		// deleteTodo: (state: Array<todoProps>, action: PayloadAction<todoProps>) => {
		// 	return state.filter((todo) => todo.id !== action.payload.id);
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUserAsync.fulfilled, (state, action) => {
				return action.payload
			})
		// .addCase(addTodoAsync.fulfilled, (state, action:any) => {
		// 	state.push(action.payload.todo)
		// })
		// .addCase(toggleCompleteAsync.fulfilled, (state, action:any) => {
		// 	const index = state.findIndex(
		// 		(todo) => todo.id === action.payload.todo.id
		// 	)
		// 	state[index].completed = action.payload.todo.completed
		// })
		// .addCase(deleteTodoAsync.fulfilled, (state, action:any) => {
		// 	return state.filter((todo) => todo.id !== action.payload.id)
		// })
	}
});

// export const { addTodo, toggleComplete, deleteTodo } = userSlice.actions;
export const { changeUser, logout } = userSlice.actions;


export default userSlice.reducer;
