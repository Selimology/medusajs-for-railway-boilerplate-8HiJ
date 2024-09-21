"use client"

import { ChangeEvent } from "react"

import * as Icon from "@phosphor-icons/react/dist/ssr";

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
}

const SortProducts = ({ sortBy, setQueryParams }: SortProductsProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newSortBy = e.target.value as SortOptions
    setQueryParams("sortBy", newSortBy)
  }

  return (
    <>
      <select
        id="select-filter"
        name="select-filter"
        className='caption1 py-2 pl-3 md:pr-20 pr-10 rounded-lg border border-line'
        onChange={(e) => { handleChange(e) }}
        defaultValue={'Sorting'}
      >
        <option value="Sorting" disabled>Sorting</option>
        <option value="created_at">Latest Products</option>
        <option value="price_desc">Price High To Low</option>
        <option value="price_asc">Price Low To High</option>
      </select>
      <Icon.CaretDown size={12} className='absolute top-1/2 -translate-y-1/2 md:right-4 right-2' />
    </>

  )
}

export default SortProducts
