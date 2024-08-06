import { FlashSaleType } from "types/flashsale"
import CountdownTimer from "../countdownTimer"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface Prop {
  data: FlashSaleType
}
const FlashSale = ({ data }: Prop) => {
  return (
    <section className="w-full flash-sale-block style-six bg-white">
      <div className="mx-auto px-4 w-full max-w-7xl">
        <div className="text-content flex items-center justify-between max-lg:flex-col max-lg:justify-center max-lg:text-center gap-5 py-10">
          <div className="heading">
            <div className="heading2">{data.title}</div>
            <div className="mt-3 body1 ">{data.description}</div>
          </div>
          <CountdownTimer />
          <LocalizedClientLink
            href={"/shop/breadcrumb-img"}
            className="button-main "
          >
            {data.buttonText}
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}

export default FlashSale
