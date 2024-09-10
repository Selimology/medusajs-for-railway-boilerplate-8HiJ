import {
    PricedProduct,
    PricedVariant,
} from "@medusajs/medusa/dist/types/pricing"
import { clx } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import { RegionInfo } from "types/global"

export default function NewProductPrice({
    product,
    variant,
    region,
}: {
    product: PricedProduct
    variant?: PricedVariant
    region: RegionInfo
}) {
    const { cheapestPrice, variantPrice } = getProductPrice({
        product,
        variantId: variant?.id,
        region,
    })

    const selectedPrice = variant ? variantPrice : cheapestPrice

    if (!selectedPrice) {
        return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />
    }

    return (
        <div className="flex items-center gap-3 flex-wrap pb-6 border-b border-line">
            <span className="product-price heading5">
                {!variant && "From "}
                {selectedPrice.calculated_price}
            </span>
            {selectedPrice.price_type === "sale" && (
                <>
                    <div className='w-px h-4 bg-line'></div>
                    <span className="product-origin-price font-normal text-secondary2 line-through">
                        {selectedPrice.original_price}
                    </span>
                    <div className="product-sale caption2 font-semibold bg-gold px-3 py-0.5 inline-block rounded-full">
                        -{selectedPrice.percentage_diff}%
                    </div>
                </>
            )}
        </div>
    )
}
