import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Suspense } from "react"
import CartButton from "../cart-button"
import * as Icon from "@phosphor-icons/react/dist/ssr"

export default function NavbarActionsRight() {
  return (
    <>
      <div className="flex flex-1 items-center justify-end">
        {/* Search */}
        {process.env.FEATURE_SEARCH_ENABLED && (
          <>
            <LocalizedClientLink
              className="ml-6 hidden p-2 search-icon cursor-pointer lg:block"
              href="/search"
              scroll={false}
            >
              <span className="sr-only">Search</span>
              <Icon.MagnifyingGlass
                size={24}
                color="black"
                aria-hidden="true"
              />
            </LocalizedClientLink>

            <div className="line absolute bg-line w-px h-6 -right-6"></div>
          </>
        )}

        {/* Account */}
        <LocalizedClientLink
          href="/account"
          className="p-2 user-icon cursor-pointer lg:ml-4"
        >
          <span className="sr-only">Account</span>
          <Icon.User size={24} color="black" aria-hidden="true" />
        </LocalizedClientLink>

        {/* Cart */}
        <div className="ml-4 flow-root lg:ml-6">
          <Suspense
            fallback={
              <LocalizedClientLink
                className="group -m-2 flex items-center p-2"
                href="/cart"
              >
                <ShoppingBagIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="sr-only">items in cart, view bag</span>
              </LocalizedClientLink>
            }
          >
            <CartButton />
          </Suspense>
        </div>
      </div>
    </>
  )
}
