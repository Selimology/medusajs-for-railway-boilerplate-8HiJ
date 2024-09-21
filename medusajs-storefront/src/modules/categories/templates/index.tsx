import { notFound } from "next/navigation"
import { Suspense, useState } from "react"

import { ProductCategoryWithChildren } from "types/global"
import InteractiveLink from "@modules/common/components/interactive-link"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import * as Icon from "@phosphor-icons/react/dist/ssr";


export default function CategoryTemplate({
  categories,
  sortBy,
  page,
  countryCode,
  layout,
}: {
  categories: ProductCategoryWithChildren[]
  sortBy?: SortOptions
  page?: string
  countryCode: string
  layout?: number
}) {
  const pageNumber = page ? parseInt(page) : 1
  const layoutCol = layout ? layout : 4

  const category = categories[categories.length - 1]
  const parents = categories.slice(0, categories.length - 1)

  if (!category || !countryCode) notFound()

  return (
    <>

      {/* Header Title */}
      <div className="breadcrumb-block style-img">
        <div className="breadcrumb-main bg-linear overflow-hidden">
          <div className="container lg:pt-[134px] pt-24 pb-10 relative">
            <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
              <div className="text-content">
                <div className="heading2 text-center">{category.name}</div>
                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                  <LocalizedClientLink href={'/'}>Homepage</LocalizedClientLink>
                  <Icon.CaretRight size={14} className='text-secondary2' />
                  <div className='text-secondary2 capitalize'>{category.name}</div>
                </div>
              </div>
              {category.category_children && (
                <div className="list-tab flex flex-wrap items-center justify-center gap-y-5 gap-8 lg:mt-[70px] mt-12 overflow-hidden">
                  {category.category_children.map((item, index) => (
                    <div
                      key={index}
                      className={`tab-item text-button-uppercase cursor-pointer has-line-before line-2px ${category.id === item.id ? 'active' : ''}`}
                    >
                      <InteractiveLink href={`/categories/${item.handle}`}>
                        {item.name}
                      </InteractiveLink>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="shop-product breadcrumb1 lg:py-20 md:py-14 py-10">
        <div className="container">
          <div className="list-product-block relative">
            <div className="filter-heading flex items-center justify-between gap-5 flex-wrap">
              <RefinementList sortBy={sortBy || "created_at"} layout={layoutCol} />
            </div>
          </div>

        </div>
      </div>
      <div className="shop-product breadcrumb1 lg:py-20 md:py-14 py-10">
        <div className="container">
          <div className="list-product-block relative">


            <Suspense fallback={<SkeletonProductGrid />}>
              <PaginatedProducts
                sortBy={sortBy || "created_at"}
                page={pageNumber}
                categoryId={category.id}
                countryCode={countryCode}
                layoutCol={layoutCol || 4}
              />
            </Suspense>
          </div>
        </div>
      </div>

    </>
  )
}
