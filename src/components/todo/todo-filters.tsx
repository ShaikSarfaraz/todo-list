"use client"

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import { setFilter } from "@/lib/store/features/filter/filterSlice"
import type { FilterStatus } from "@/lib/store/features/filter/filterSlice"
import { Button } from "@/components/ui/button"

export function TodoFilters() {
  const currentFilter = useAppSelector((state) => state.filter.status)
  const dispatch = useAppDispatch()

  const filters: FilterStatus[] = ["all", "active", "completed"]

  return (
    <div className="flex gap-2">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={currentFilter === filter ? "default" : "outline"}
          onClick={() => dispatch(setFilter(filter))}
          className="capitalize"
        >
          {filter}
        </Button>
      ))}
    </div>
  )
}

