'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import 'swiper/css/bundle';

interface CategoryItem {
    id: string;
    handle: string;
    imageSrc: string;
    name: string;
    productCount: number;
}

interface ShopByCategoriesProps {
    data: {
        title: string;
        categories: CategoryItem[];
    }
}

const ShopByCategories: React.FC<ShopByCategoriesProps> = ({ data }) => {
    const router = useRouter()
    const { title, categories } = data
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

    const handleCategoryClick = (handle: string) => {
        router.push(`/categories/${handle}`);
    };

    if (!categories || categories.length === 0) {
        return null;
    }

    return (
        <div className="shop-by-categories-block style-six md:py-20 py-10">
            <div className="container">
                <div className="heading3 text-center">{title}</div>
                <div className="list-categories section-swiper-navigation style-small-border style-outline md:mt-10 mt-6">
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={2}
                        navigation
                        loop={true}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            576: {
                                slidesPerView: 3,
                                spaceBetween: 12,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                            1290: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                        }}
                        className='h-full'>
                        {categories.map((category) => (
                            <SwiperSlide key={category.id}>
                                <div className="category-item block relative cursor-pointer" onClick={() => handleCategoryClick(category.handle)}>
                                    <div className="bg-img rounded-full overflow-hidden">
                                        <Image
                                            src={category.imageSrc}
                                            width={800}
                                            height={800}
                                            alt={category.name}
                                            priority={true}
                                            className="md:grayscale md:hover:grayscale-0 transition-all duration-300 hover:scale-105 "
                                        />
                                    </div>
                                    <div className="category-name text-center mt-5 duration-500">
                                        <span className='heading5'>{category.name}</span>
                                        <span className='text-secondary'> ({category.productCount})</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ShopByCategories