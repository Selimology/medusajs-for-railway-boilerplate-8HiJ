import { getCustomer } from "@lib/data"
import AccountLayout from "@modules/account/templates/account-layout"
import Breadcrumb from "@modules/home/components/breadcrumb"

export default async function AccountPageLayout({
  dashboard,
  login,
}: {
  dashboard?: React.ReactNode
  login?: React.ReactNode
}) {
  const customer = await getCustomer().catch(() => null)

  return (
    <>
      {customer ? (
        <Breadcrumb heading="My Account" subHeading="My Account" />
      ) : (
        <Breadcrumb heading="Login" subHeading="Login" />
      )}

      <AccountLayout customer={customer}>
        {customer ? dashboard : login}
      </AccountLayout>
    </>
  )
}
