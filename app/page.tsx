import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Dashboard } from '@/components/dashboard/dashboard'
import { CoreFlow } from '@/components/sections/core-flow'
import { Applications } from '@/components/sections/applications'
import { Hardware } from '@/components/sections/hardware'
import { FutureScope } from '@/components/sections/future-scope'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Dashboard />
        <CoreFlow />
        <Applications />
        <Hardware />
        <FutureScope />
      </main>
      <SiteFooter />
    </>
  )
}
