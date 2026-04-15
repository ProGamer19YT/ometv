import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Ailə ilə gəldik və hər şey mükəmməl idi. Yeməklərin dadı, xidmət və atmosfer — hamısı yüksək səviyyədə. Mütləq yenə gələcəyik.",
    author: "Aygün M.",
    role: "Daimi qonaq",
  },
  {
    quote: "İş görüşlərimiz üçün mükəmməl yerdir. Sakit, zövqlü və professional xidmət. Tərəfdaşlarımız da çox məmnun qaldılar.",
    author: "Rəşad K.",
    role: "Biznes qonaq",
  },
  {
    quote: "Nişan mərasimimizi burada keçirdik. Komanda hər şeyi mükəmməl planlaşdırdı. Xatirələrimiz həmişə xüsusi olacaq.",
    author: "Leyla və Orxan",
    role: "Xüsusi tədbir",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
              Rəylər
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              Qonaqlarımız nə deyir?
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative p-8 lg:p-10 bg-background rounded-sm border border-border/50"
              >
                <Quote className="w-10 h-10 text-primary/30 mb-6" />
                <blockquote className="text-foreground leading-relaxed mb-8 text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-serif text-foreground text-lg">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
