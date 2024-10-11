import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { notFound } from "next/navigation"
import NewImageGallery from "./newImageGallery"
import { Suspense } from "react"
import ProductInfo from "../product-info"
import ProductActions from "@modules/products/components/product-actions"
import ProductActionsWrapper from "../product-actions-wrapper"
import ProductTabs from "@modules/products/components/product-tabs"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import RelatedProducts from "@modules/products/components/related-products"
import NewProductInfo from "./newProductInfo"
import NewProductActions from "./newProductactions"
import NewProductActionsWrapper from "./newProductActionWrapper"

type ProductTemplateProps = {
    product: PricedProduct
    region: Region
    countryCode: string
  }

  const NewProductTemplate: React.FC<ProductTemplateProps> = ({
    product,
    region,
    countryCode,
  }) => {
    if (!product || !product.id) {
      return notFound()
    }
  
    return (
      <div className="product-detail sale">
        <div className="featured-product underwear md:py-20 py-10">
          <div className="container flex justify-between gap-y-6 flex-wrap">
            <NewImageGallery images={product?.images || []} />
            <div className="product-infor md:w-1/2 w-full lg:pl-[15px] md:pl-2">
              <NewProductInfo product={product} />
              <Suspense
                fallback={<NewProductActions product={product} region={region} />}
              >
                <NewProductActionsWrapper id={product.id} region={region} />
              </Suspense>

              <ProductTabs product={product}/>
            </div>
          </div>
        </div>
        <div className="related-product md:py-20 py-10">
          <Suspense fallback={<SkeletonRelatedProducts />}>
            <RelatedProducts product={product} countryCode={countryCode} />
          </Suspense>
        </div>
      </div>
    )
  }

  export default NewProductTemplate