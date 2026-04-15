import { Suspense } from 'react'

import { LoginForm } from '@/components/admin/auth/login-form'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,165,82,0.15),_transparent_25%),linear-gradient(180deg,rgba(12,10,9,0.98),rgba(18,15,13,1))] px-4 py-10">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs text-primary">
            Ayrıca işləyən idarəetmə paneli
          </div>
          <div className="space-y-4">
            <h1 className="font-serif text-4xl leading-tight md:text-5xl">
              Hayal Baku üçün ayrıca, təhlükəsiz və peşəkar admin panel
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              Dashboard, məzmun idarəetməsi, menyu, rezervasiyalar, SEO, qalereya, istifadəçi rolları və audit log
              üçün real istifadəyə hazır idarəetmə strukturu.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {['Tünd premium UI', 'Rol əsaslı giriş', 'Seed məlumatı ilə tam CRUD'].map((feature) => (
              <div key={feature} className="rounded-2xl border border-border/60 bg-card/50 px-4 py-4 text-sm">
                {feature}
              </div>
            ))}
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  )
}
