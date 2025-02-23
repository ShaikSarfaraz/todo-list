import { TodoInput } from "@/components/todo/todo-input"
import { TodoList } from "@/components/todo/todo-list"
import { TodoFilters } from "@/components/todo/todo-filters"
import { TodoStats } from "@/components/todo/todo-stats"

export default function TodoPage() {
  return (
    <main className="mx-auto max-w-2xl p-4">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="mb-4 text-3xl font-bold">Todo App</h1>
          <TodoInput />
        </div>

        <div className="flex items-center justify-between">
          <TodoFilters />
          <TodoStats />
          <TodoFilters />
          <TodoStats />
          


        </div>

        <TodoList />
      </div>
    </main>
  )
}

