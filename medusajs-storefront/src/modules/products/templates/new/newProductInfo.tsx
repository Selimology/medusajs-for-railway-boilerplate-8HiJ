import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: PricedProduct
}

const NewProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col mx-auto gap-y-4 pb-6 border-b border-line">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading level="h2" className="text-3xl leading-10 text-ui-fg-base font-lora font-bold ">
          {product.title}
        </Heading>


      </div>
    </div>
  )
}

export default NewProductInfo
