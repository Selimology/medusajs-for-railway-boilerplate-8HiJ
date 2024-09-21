import { ProductCollection } from "@medusajs/medusa"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { notFound } from "next/navigation"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Suspense } from "react";
import RefinementList from "@modules/store/components/refinement-list";
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid";
import PaginatedProducts from "@modules/store/templates/paginated-products";


export default function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
  layout
}: {
  sortBy?: SortOptions
  collection: ProductCollection
  page?: string
  countryCode: string
  layout?: number
}) {
  const pageNumber = page ? parseInt(page) : 1
  const layoutCol = layout ? layout : 4

  return (
    <>
      {/* Header Title */}
      <div className="breadcrumb-block style-img">
        <div className="breadcrumb-main bg-linear overflow-hidden">
          <div className="container lg:pt-[134px] pt-24 pb-10 relative">
            <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
              <div className="text-content">
                <div className="heading2 text-center">{collection.title}</div>
                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                  <LocalizedClientLink href={'/'}>Homepage</LocalizedClientLink>
                  <Icon.CaretRight size={14} className='text-secondary2' />
                  <div className='text-secondary2 capitalize'>{collection.title}</div>
                </div>
              </div>
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
                collectionId={collection.id}
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
