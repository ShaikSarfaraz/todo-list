"use client"

import { useAppSelector } from "@/lib/store/hooks"
import { TodoItem } from "./todo-item"
import type { Todo } from "@/lib/store/features/todos/todosSlice"

export function TodoList() {
  const todos = useAppSelector((state) => state.todos.items)
  const filterStatus = useAppSelector((state) => state.filter.status)

  const filteredTodos = todos.filter((todo: Todo) => {
    if (filterStatus === "active") return !todo.completed
    if (filterStatus === "completed") return todo.completed
    return true
  })

  if (filteredTodos.length === 0) {
    return (
      <div className="text-center text-muted-foreground">
        No {filterStatus !== "all" ? filterStatus : ""} todos found
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

