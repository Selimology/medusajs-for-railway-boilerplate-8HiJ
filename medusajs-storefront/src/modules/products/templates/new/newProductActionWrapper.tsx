import { retrievePricedProductById } from "@lib/data"
import { Region } from "@medusajs/medusa"
import NewProductActions from "./newProductactions"

/**
 * Fetches real time pricing for a product and renders the product actions component.
 */
export default async function NewProductActionsWrapper({
  id,
  region,
}: {
  id: string
  region: Region
}) {
  const product = await retrievePricedProductById({ id, regionId: region.id })

  if (!product) {
    return null
  }

  return <NewProductActions product={product} region={region} />
}
