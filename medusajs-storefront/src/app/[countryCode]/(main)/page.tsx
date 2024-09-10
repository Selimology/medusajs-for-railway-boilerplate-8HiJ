import { Product } from "@medusajs/medusa"
import { Metadata } from "next"
import {
  getCategoryByHandle,
  getCollectionByHandle,
  getCollectionsList,
  getProductsList,
  getRegion,
} from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import SignupBanner from "@modules/home/components/signupbanner"
import InstagramCarousel from "@modules/home/components/instagram-carousel"
import Testimonial from "@modules/home/components/testimonial"
import testimonialData from "@lib/data/json/Testimonial/Testimonial.json"
import testimonialShopLinkData from "@lib/data/json/Testimonial/TestimonialLink.json"
import signupData from "@lib/data/json/Signup.json"
import benefitData from "@lib/data/json/Benefits.json"
import instagramProofData from "@lib/data/json/Instagram/Instagram.json"
import instagramHeaderData from "@lib/data/json/Instagram/InstagramHeader.json"
import lookbookProductData from "@lib/data/json/LookbookProducts.json"
import Benefit from "@modules/home/components/benefit"
import FlashSale from "@modules/home/components/flashsale"
import { CountdownProvider } from "@lib/context/countdown-context"
import flashSaleData from "@lib/data/json/FlashSale.json"
import LookBook from "@modules/home/components/lookbook"
import heroSectionData from "@lib/data/json/Hero.json"
import BannerBottom from "@modules/home/components/banner-bottom"
import ShopByCategories from "@modules/home/components/shop-by-categories"
import shopByCategoriesData from "@lib/data/json/ShopByCategories.json"

export const metadata: Metadata = {
  title: "Home Jewellery | Jewellery GB Shop",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}
const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

const getCollectionWithHandle = cache(
  async (
    countryCode: string,
    targetHandle: string
  ): Promise<ProductCollectionWithPreviews | null> => {
    const collection = await getCollectionByHandle(targetHandle)
    if (!collection) {
      return null
    }

    const collectionID = collection.id

    const { response } = await getProductsList({
      queryParams: { collection_id: [collectionID] },
      countryCode,
    })

    collection.products = response.products as Product[]

    return collection as unknown as ProductCollectionWithPreviews
  }
)

const getMultipleCollectionsWithHandles = cache(
  async (
    countryCode: string,
    targetHandles: string[]
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    try {
      const collections = await Promise.all(
        targetHandles.map((handle) =>
          getCollectionWithHandle(countryCode, handle)
        )
      )

      const validCollections = collections.filter(
        (collection) => collection !== null
      ) as ProductCollectionWithPreviews[]

      if (validCollections.length === 0) {
        return null
      }

      return validCollections
    } catch (error) {
      console.error("Error fetching multiple collections:", error)
      return null
    }
  }
)

const getCategoryWithHandle = cache(
  async (
    countryCode: string,
    targetHandle: string
  ): Promise<ProductCollectionWithPreviews | null> => {
    const { product_categories } = await getCategoryByHandle([targetHandle])
    if (!product_categories || product_categories.length === 0) {
      return null
    }

    const category = product_categories[0]

    const categoryId = category.id

    const { response } = await getProductsList({
      queryParams: { category_id: [categoryId] },
      countryCode,
    })

    category.products = response.products as Product[]

    return category as unknown as ProductCollectionWithPreviews
  }
)

const getMultipleCategoriesWithHandles = cache(
  async (
    countryCode: string,
    targetHandles: string[]
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    try {
      const categories = await Promise.all(
        targetHandles.map((handle) =>
          getCategoryWithHandle(countryCode, handle)
        )
      )


      const validCategories = categories.filter(
        (category) => category !== null
      ) as ProductCollectionWithPreviews[]

      if (validCategories.length === 0) {
        return null
      }

      return validCategories
    } catch (error) {
      console.error("Error fetching multiple categories:", error)
      return null
    }
  }
)


export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  const targetDate = new Date("2024-09-28")

  const bannerBottomData = {
    banners: [
      { text: "Get Glowing Skin", icon: "icon-leaves" },
      { text: "Learn Skincare Tips", icon: "icon-double-leaves" },
      { text: "Subscribe for Exclusive Offers", icon: "icon-leaves" },
      // Add more items as needed
    ],
    textColor: "text-white",
    bgLine: "bg-black"
  }

  return (
    <>
      <Hero heroSlides={heroSectionData} />
      <BannerBottom data={bannerBottomData} />
      {/* <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div> */}
      {/* <CollectionCategoryRail collections={groupedCategories} region={region} /> */}
      <ShopByCategories data={shopByCategoriesData} />
      {/* <CollectionProductRail collection={numberCollection} region={region} /> */}
      <LookBook products={lookbookProductData} />
      <CountdownProvider targetDate={targetDate}>
        <FlashSale data={flashSaleData} />
      </CountdownProvider>
      <Testimonial
        limit={6}
        data={testimonialData}
        shopLinkdata={testimonialShopLinkData}
      />
      <Benefit data={benefitData} />
      <InstagramCarousel
        proofData={instagramProofData}
        instagramHeaderdata={instagramHeaderData}
      />
      <SignupBanner data={signupData} />
      {/* <ModalNewsletter /> */}
    </>
  )
}
