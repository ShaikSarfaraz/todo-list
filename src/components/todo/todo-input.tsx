"use client"

import type React from "react"

import { useState } from "react"
import { useAppDispatch } from "@/lib/store/hooks"
import { addTodo } from "@/lib/store/features/todos/todosSlice"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export function TodoInput() {
  const [text, setText] = useState("")
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch(addTodo(text.trim()))
      setText("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1"
      />
      <Button type="submit" disabled={!text.trim()}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Add
      </Button>
    </form>
  )
}

