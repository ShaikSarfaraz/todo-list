"use client"

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import { decrement, increment } from "@/lib/store/features/counter/counterSlice"
import { Button } from "@/components/ui/button"

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="flex items-center gap-4">
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <span className="text-xl font-bold">{count}</span>
      <Button onClick={() => dispatch(increment())}>+</Button>
    </div>
  )
}

