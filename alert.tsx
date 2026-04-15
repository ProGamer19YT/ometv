import { Separator } from "@/components/ui/separator"

export function About() {
  return (
    <section id="haqqimizda" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
                Haqqımızda
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight text-balance">
                Dadların və anların birləşdiyi məkan
              </h2>
              <Separator className="w-20 bg-primary/50 mb-8" />
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Hayal Kahvesi, şəhərin qəlbində yerləşən, hər ziyarəti xüsusi bir təcrübəyə çevirən premium kafe və restoran konseptidir. Burada hər bir detal — menyudan atmosferə qədər — qonaqlarımıza unudulmaz anlar yaşatmaq üçün düşünülüb.
                </p>
                <p>
                  Keyfiyyətli ingrediyentlər, peşəkar komanda və səmimi xidmət ilə sizləri ağırlamaq bizim üçün şərəfdir. İstər səhər qəhvənizi içmək, istərsə də axşam yeməyi üçün gəlin — burada özünüzü evinizdə hiss edəcəksiniz.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <p className="font-serif text-3xl md:text-4xl text-primary mb-2">[—]</p>
                  <p className="text-sm text-muted-foreground tracking-wider uppercase">İllik təcrübə</p>
                </div>
                <div>
                  <p className="font-serif text-3xl md:text-4xl text-primary mb-2">[—]</p>
                  <p className="text-sm text-muted-foreground tracking-wider uppercase">Menyu seçimi</p>
                </div>
                <div>
                  <p className="font-serif text-3xl md:text-4xl text-primary mb-2">[—]</p>
                  <p className="text-sm text-muted-foreground tracking-wider uppercase">Məmnun qonaq</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/5] bg-secondary rounded-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <div className="text-center p-8">
                      <p className="font-serif text-2xl mb-2">Restoran görünüşü</p>
                      <p className="text-sm">Şəkil əlavə ediləcək</p>
                    </div>
                  </div>
                </div>
                {/* Decorative border */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 rounded-sm -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
