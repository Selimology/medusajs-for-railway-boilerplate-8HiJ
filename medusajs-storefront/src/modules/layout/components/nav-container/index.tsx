"use client"

import React, { useState } from "react"
import MobileMenu from "../mobileMenu"
import { NavigationDataType } from "types/navbar"
import NavbarActionsRight from "../navbar-actions-right"
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline"
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react"
import { classNames } from "@lib/util/classnames"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import { usePathname } from "next/navigation"

interface NavContainerProps {
  children: React.ReactNode
  navigation: NavigationDataType
}

export default function NavContainer({
  children,
  navigation,
}: NavContainerProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const parts = pathname.split("/").filter(Boolean)
  const restOfPath = "/" + parts.slice(1).join("/")

  return (
    <>
      <MobileMenu navigation={navigation} open={open} setOpen={setOpen} />

      {/* Desktop Navbar */}
      <header className="relative bg-white border-b border-gray-200">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div>
            <div className="flex h-32  items-center justify-between">
              <div className="flex flex-1 items-center lg:hidden">
                <button
                  type="button"
                  className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                  onClick={() => setOpen(true)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:block lg:flex-1 lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <PopoverButton
                              className={classNames(
                                open
                                  ? "border-[#e3c454] text-black outline-none text-button-uppercase duration-300 h-full flex items-center justify-center gap-1 "
                                  : "border-transparent outline-none  text-black text-button-uppercase duration-300 h-full flex items-center justify-center gap-1 ",
                                "hover:text-[#e3c454] relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </PopoverButton>
                          </div>

                          <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <PopoverPanel className="absolute inset-x-0 z-10 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <Image
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <LocalizedClientLink
                      key={page.name}
                      href={page.href}
                      className={` flex items-center text-button-uppercase transition-colors duration 200 ease-out hover:text-[#e3c454]
                        ${restOfPath === page.href ? "text-[#e3c454] " : ""}
                        `}
                    >
                      {page.name}
                    </LocalizedClientLink>
                  ))}
                </div>
              </PopoverGroup>

              {/* Logo */}
              <LocalizedClientLink href="#" className="flex">
                <span className="sr-only">JewelleryGBShop</span>
                <Image
                  className="h-28 w-auto"
                  height={90}
                  width={90}
                  src="https://res.cloudinary.com/djoki7czl/image/upload/v1717346704/karf3jyynrnqfvdeqkrn.svg"
                  alt=""
                />
              </LocalizedClientLink>

              {children}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
