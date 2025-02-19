import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: number
}

interface TodosState {
  items: Todo[]
}

const initialState: TodosState = {
  items: [],
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
        createdAt: Date.now(),
      })
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload)
    },
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.items.find((todo) => todo.id === action.payload.id)
      if (todo) {
        todo.text = action.payload.text
      }
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions
export default todosSlice.reducer

