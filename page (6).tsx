import type { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { AdminShell } from '@/components/admin/shell'
import { AdminDataProvider } from '@/lib/admin/data-context'
import { ADMIN_SESSION_COOKIE } from '@/lib/admin/constants'

export default async function AdminPanelLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies()
  const hasSession = cookieStore.get(ADMIN_SESSION_COOKIE)?.value === 'authenticated'

  if (!hasSession) {
    redirect('/admin/login')
  }

  return (
    <AdminDataProvider>
      <AdminShell>{children}</AdminShell>
    </AdminDataProvider>
  )
}
