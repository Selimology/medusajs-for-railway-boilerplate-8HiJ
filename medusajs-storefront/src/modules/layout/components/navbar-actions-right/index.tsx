import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Suspense } from "react"
import CartButton from "../cart-button"

export default function NavbarActionsRight() {
  return (
    <>
      <div className="flex flex-1 items-center justify-end">
        {/* Search */}
        {process.env.FEATURE_SEARCH_ENABLED && (
          <LocalizedClientLink
            className="ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block"
            href="/search"
            scroll={false}
          >
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
          </LocalizedClientLink>
        )}

        {/* Account */}
        <LocalizedClientLink
          href="/account"
          className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4"
        >
          <span className="sr-only">Account</span>
          <UserIcon className="h-6 w-6" aria-hidden="true" />
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
