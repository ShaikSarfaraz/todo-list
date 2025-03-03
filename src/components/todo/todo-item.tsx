"use client"

import { useState } from "react"
import { useAppDispatch } from "@/lib/store/hooks"
import { toggleTodo, deleteTodo, editTodo, type Todo } from "@/lib/store/features/todos/todosSlice"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Pencil, Trash2, X, Check } from "lucide-react"

interface TodoItemProps {
  todo: Todo
}

export function TodoItem({ todo }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(todo.text)
  const dispatch = useAppDispatch()

  const handleEdit = () => {
    if (editedText.trim() !== todo.text) {
      dispatch(editTodo({ id: todo.id, text: editedText.trim() }))
    }
    setIsEditing(false)
  }

  return (
    <div className="flex items-center gap-2 rounded-lg border p-4">
      <Checkbox checked={todo.completed} onCheckedChange={() => dispatch(toggleTodo(todo.id))} />
      {isEditing ? (
        <div className="flex flex-1 items-center gap-2">
          <Input value={editedText} onChange={(e) => setEditedText(e.target.value)} className="flex-1" />
          <Button size="icon" variant="ghost" onClick={handleEdit}>
            <Check className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => {
              setIsEditing(false)
              setEditedText(todo.text)
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <>
          <span className={`flex-1 ${todo.completed ? "text-muted-foreground line-through" : ""}`}>{todo.text}</span>
          <Button size="icon" variant="ghost" onClick={() => setIsEditing(true)}>
            <Pencil className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" onClick={() => dispatch(deleteTodo(todo.id))}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  )
}

