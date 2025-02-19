"use client"

import { useAppSelector } from "@/lib/store/hooks"

export function TodoStats() {
  const todos = useAppSelector((state) => state.todos.items)
  const totalTodos = todos.length
  const completedTodos = todos.filter((todo) => todo.completed).length
  const activeTodos = totalTodos - completedTodos

  return (
    <div className="flex gap-4 text-sm text-muted-foreground">
      <span>Total: {totalTodos}</span>
      <span>Active: {activeTodos}</span>
      <span>Completed: {completedTodos}</span>
    </div>
  )
}

