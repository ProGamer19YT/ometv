'use client'

import { useMemo, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Coffee, LockKeyhole, Mail } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ADMIN_CURRENT_USER_KEY, ADMIN_SESSION_COOKIE } from '@/lib/admin/constants'
import { demoAdminState, demoPassword, demoUsers } from '@/lib/admin/demo-data'
import { loadAdminState, saveAdminState } from '@/lib/admin/storage'

const schema = z.object({
  email: z.string().email('Düzgün e-poçt daxil edin'),
  password: z.string().min(6, 'Şifrə ən azı 6 simvol olmalıdır'),
})

type FormValues = z.infer<typeof schema>

export function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const params = useSearchParams()
  const redirectTo = params.get('redirect') || '/admin'

  const defaults = useMemo<FormValues>(
    () => ({ email: demoUsers[0].email, password: demoPassword }),
    [],
  )

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaults,
  })

  const onSubmit = form.handleSubmit(async (values) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 750))

    const existingState = loadAdminState()
    const sourceUsers = existingState.users.length > 0 ? existingState.users : demoUsers
    const matchedUser = sourceUsers.find((user) => user.email === values.email)

    if (!matchedUser || values.password !== demoPassword || !matchedUser.isActive) {
      toast.error('E-poçt və ya şifrə yanlışdır')
      setIsSubmitting(false)
      return
    }

    const now = new Date().toISOString()
    const nextState = {
      ...(existingState.users.length > 0 ? existingState : demoAdminState),
      users: (existingState.users.length > 0 ? existingState.users : demoUsers).map((user) =>
        user.id === matchedUser.id ? { ...user, lastLogin: now } : user,
      ),
    }

    saveAdminState(nextState)
    window.localStorage.setItem(
      ADMIN_CURRENT_USER_KEY,
      JSON.stringify({ ...matchedUser, lastLogin: now }),
    )
    document.cookie = `${ADMIN_SESSION_COOKIE}=authenticated; path=/; max-age=86400`
    toast.success('Giriş uğurla tamamlandı')
    router.push(redirectTo)
    router.refresh()
  })

  return (
    <Card className="w-full border-border/60 bg-card/80 shadow-2xl backdrop-blur-xl">
      <CardHeader className="space-y-4">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
          <Coffee className="size-4" />
          Premium idarəetmə paneli
        </div>
        <div className="space-y-2">
          <CardTitle className="text-2xl">Admin giriş</CardTitle>
          <CardDescription>
            Təhlükəsiz giriş. Başlanğıc admin hesabı ilə daxil olub sistemi real məlumatlarla doldura bilərsiniz.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">E-poçt</Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="email" className="pl-9" placeholder="admin@hayalbaku.local" {...form.register('email')} />
            </div>
            {form.formState.errors.email ? (
              <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Şifrə</Label>
              <button type="button" className="text-xs text-primary transition hover:opacity-80">
                Şifrəni unutdum
              </button>
            </div>
            <div className="relative">
              <LockKeyhole className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="password" type="password" className="pl-9" placeholder="••••••••" {...form.register('password')} />
            </div>
            {form.formState.errors.password ? (
              <p className="text-xs text-destructive">{form.formState.errors.password.message}</p>
            ) : null}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Daxil olunur...' : 'Daxil ol'}
          </Button>
        </form>

        <div className="rounded-2xl border border-dashed border-border/80 bg-background/40 p-4 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Başlanğıc admin giriş məlumatı</p>
          <p>E-poçt: {demoUsers[0].email}</p>
          <p>Şifrə: {demoPassword}</p>
        </div>
      </CardContent>
    </Card>
  )
}
