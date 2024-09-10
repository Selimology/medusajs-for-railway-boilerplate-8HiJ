import EmailSignUp from "@modules/layout/components/email-signup"
import { SignUpType } from "types/signup"

interface Props {
  data: SignUpType
}

export default async function SignupBanner({ data }: Props) {
  return (
    <div className="container pb-20">

    <section className="mx-auto w-full max-w-7xl">
      <div className="newsletter-block py-8 sm:rounded-[32px] rounded-3xl flex flex-col items-center bg-transparent">
        <div className="heading3 text-black text-center">{data.title}</div>
        <div className="text-black text-center mt-3">{data.description}</div>
        <div className="input-block lg:w-1/2 sm:w-3/5 w-full h-[52px] sm:mt-8 mt-6">
          <EmailSignUp />
        </div>
      </div>
      
      {/* Help section */}
      <div className="help flex items-center justify-between gap-6 gap-y-3 max-sm:grid max-sm:grid-cols-1 mt-6 py-4 border-t border-b border-line w-full">
        <div>Need help?</div>
        <div className="line bg-line w-px h-[26px] max-sm:hidden"></div>
        <div>Working hours : 8:00am - 6:00pm, Mon to Sun</div>
        <div className="line bg-line w-px h-[26px] max-sm:hidden"></div>
        <div>Email: hi.avitex@gmail.com</div>
        <div className="line bg-line w-px h-[26px] max-sm:hidden"></div>
        <div>Phone: +84-123-234-3456</div>
      </div>
    </section>
    </div>

  )
}
