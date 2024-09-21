import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { FaPinterest, FaInstagram, FaFacebook , FaWhatsapp} from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"
import { FooterIconProp, FooterProps } from "types/footer"

const icons: FooterIconProp = {
  FaFacebook: <FaFacebook height="10" width="10" />,
  FaInstagram: <FaInstagram height="10" width="10" />,
  FaWhatsapp: <FaWhatsapp height="10" width="10" />,
}

export default function Footer({
  logoText,
  description,
  companyInformation,
  customerCare,
  tips,
  social,
}: FooterProps) {
  return (
    <footer className="bg-surface">
      {/* Accessibility */}
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 ">
          <div className="col-span-2">
            {/* Logo */}
            <a href="#" className="flex  items-center mb-2  sm:mb-0">
              <Image
                src={
                  "https://res.cloudinary.com/djoki7czl/image/upload/v1717346704/karf3jyynrnqfvdeqkrn.svg"
                }
                width={82}
                height={82}
                alt="Logo"
              />
              {/* Logo Text */}
              <span className="heading6">{logoText}</span>
            </a>

            {/* Description Text */}
            <p className="my-4">{description}</p>

            {/* Social Media Logos */}
            <ul className="flex mt-5 space-x-8">
              {social.map((item, index) => (
                <li key={index}>
                  <a className="text-2xl" href={item.href}>
                    {item.icon && icons[item.icon]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* First Column */}
          <div className="lg:mx-auto">
            <h3 className=" text-button-uppercase mb-4 mt-3 flex uppercase items-center">
              {companyInformation.title}
            </h3>
            <ul role="list">
              {companyInformation.items.map((item) => (
                <li key={item.name} className="mb-4">
                  <LocalizedClientLink
                    href={item.href}
                    className=" text-black leading text-sm caption1 has-line-before duration-300"
                  >
                    {item.name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Second Row */}
          <div className="lg:mx-auto">
            <h3 className="mb-4 mt-3 flex uppercase items-center text-button-uppercase">
              {customerCare.title}
            </h3>
            <ul role="list">
              {customerCare.items.map((item) => (
                <li key={item.name} className="mb-4">
                  <LocalizedClientLink
                    href={item.href}
                    className=" text-black leading caption1 has-line-before duration-300 text-sm"
                  >
                    {item.name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Third Row */}
          <div className="lg:mx-auto">
            <h3 className="mb-4 mt-3 flex uppercase items-center text-button-uppercase">
              {tips.title}
            </h3>
            <ul role="list">
              {tips.items.map((item) => (
                <li key={item.name} className="mb-4">
                  <LocalizedClientLink
                    href={item.href}
                    className=" text-black caption1 has-line-before duration-300 leading text-sm"
                  >
                    {item.name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom of Footer */}
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-center copyright caption1 text-secondary">
          &copy; 2021 - {new Date().getFullYear()}{" "}
          <a href="#" className=" has-line-before duration-300">
            {logoText}
          </a>{" "}
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
