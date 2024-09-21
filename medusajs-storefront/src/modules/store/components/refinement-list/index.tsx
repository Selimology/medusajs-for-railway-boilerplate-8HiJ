"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState } from "react"
import SortProducts, { SortOptions } from "./sort-products"

type RefinementListProps = {
  sortBy: SortOptions
  search?: boolean
  layout: number
}

const RefinementList = ({ sortBy, layout }: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [layoutCol, setLayoutCol] = useState<number>(layout)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

  const handleLayoutChange = (col: number) => {
    setQueryParams("layout", col.toString())
  }


  return (
    <>
      <div className="choose-layout flex items-center gap-2">
        <div
          className={`item three-col p-2 border border-line rounded flex items-center justify-center cursor-pointer ${layoutCol === 3 ? 'active' : ''}`}
          onClick={() => handleLayoutChange(3)}
        >
          <div className='flex items-center gap-0.5'>
            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
          </div>
        </div>
        <div
          className={`item four-col p-2 border border-line rounded flex items-center justify-center cursor-pointer ${layoutCol === 4 ? 'active' : ''}`}
          onClick={() => handleLayoutChange(4)}
        >
          <div className='flex items-center gap-0.5'>
            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
          </div>
        </div>
        <div
          className={`item five-col p-2 border border-line rounded flex items-center justify-center cursor-pointer ${layoutCol === 5 ? 'active' : ''}`}
          onClick={() => handleLayoutChange(5)}
        >
          <div className='flex items-center gap-0.5'>
            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
            <span className='w-[3px] h-4 bg-secondary2 rounded-sm'></span>
          </div>
        </div>
      </div>

      <div className="right flex items-center gap-3">
        <label htmlFor='select-filter' className="caption1 capitalize">Sort by</label>
        <div className="select-block relative">
          <SortProducts sortBy={sortBy} setQueryParams={setQueryParams} />
        </div>
      </div>

    </>

  )
}

export default RefinementList
