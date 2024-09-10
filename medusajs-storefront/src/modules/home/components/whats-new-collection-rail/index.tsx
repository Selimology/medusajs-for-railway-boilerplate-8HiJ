// 'use client'

// import React, { useState } from 'react'
// import { ProductCollectionWithPreviews } from "types/global"
// import { Region } from "@medusajs/medusa"
// import { motion } from 'framer-motion'
// import ProductPreview from '@modules/products/components/product-preview'

// interface WhatsNewProps {
//   collections: ProductCollectionWithPreviews[] | null
//   region: Region
// }

// const WhatsNew: React.FC<WhatsNewProps> = ({ collections, region }) => {
//   const [activeTab, setActiveTab] = useState<string>(collections?.[0]?.handle || '')

//   const handleTabClick = (handle: string) => {
//     setActiveTab(handle)
//   }

//   const activeCollection = collections?.find(collection => collection.handle === activeTab)

//   return (
//     <div className="whats-new-block md:pt-20 pt-10">
//       <div className="container">
//         <div className="heading flex flex-col items-center text-center">
//           <h2 className="heading3">What's new</h2>
//           <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl mt-6">
//             {collections?.map((collection) => (
//               <div
//                 key={collection.handle}
//                 className={`tab-item relative text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black ${activeTab === collection.handle ? 'active' : ''}`}
//                 onClick={() => handleTabClick(collection.handle)}
//               >
//                 {activeTab === collection.handle && (
//                   <motion.div layoutId='active-pill' className='absolute inset-0 rounded-2xl bg-white'></motion.div>
//                 )}
//                 <span className='relative text-button-uppercase z-[1]'>
//                   {collection.title}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="list-product hide-product-sold grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
//           {activeCollection?.products.slice(0, 6).map((product) => (
//             <ProductPreview key={product.id} {...product} region={region} />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default WhatsNew