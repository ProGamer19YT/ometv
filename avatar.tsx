import { Coffee, Users, Sparkles } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Zərif Atmosfer",
    description: "İncəliklə düzənlənmiş interyerimiz hər ziyarətinizi xüsusi bir səyahətə çevirir. İstər iş görüşü, istərsə də romantik axşam — mükəmməl mühit sizi gözləyir.",
  },
  {
    icon: Users,
    title: "Səmimi Xidmət",
    description: "Peşəkar komandamız hər qonağı fərdi qarşılayır. Sizin rahatlığınız və məmnuniyyətiniz bizim əsas prioritetimizdir.",
  },
  {
    icon: Coffee,
    title: "Seçilmiş Dadlar",
    description: "Hər bir yemək və içki diqqətlə hazırlanır. Təzə ingrediyentlər və ustad əlləri ilə yaradılan dadlar sizi heyran edəcək.",
  },
]

export function Experience() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
              Təcrübə
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              Niyə Hayal Kahvesi?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Hər detalda keyfiyyət, hər anda qayğı — bu, bizim fərqimizdir.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 lg:p-10 bg-card rounded-sm border border-border/50 hover:border-primary/30 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
