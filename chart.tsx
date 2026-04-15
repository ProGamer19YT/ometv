import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Cake, Briefcase, Heart } from "lucide-react"

const eventTypes = [
  {
    icon: Cake,
    title: "Ad Günləri",
    description: "Xüsusi gününüzü unudulmaz edin. Tort, dekorasiya və xüsusi menyu seçimləri.",
  },
  {
    icon: Heart,
    title: "Nişan Mərasimləri",
    description: "Romantik və zərif atmosferdə nişan mərasiminizi qeyd edin.",
  },
  {
    icon: Briefcase,
    title: "Korporativ Tədbirlər",
    description: "İş görüşləri, team building və korporativ naharlar üçün ideal məkan.",
  },
  {
    icon: Users,
    title: "Qrup Tədbirləri",
    description: "Ailə yığıncaqları, reunion və xüsusi mərasimlər üçün tam xidmət.",
  },
]

export function PrivateEvents() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
              Xüsusi Tədbirlər
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              Xüsusi anlarınızı bizimlə qeyd edin
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              İstənilən tədbir üçün peşəkar planlaşdırma və fərdi yanaşma ilə unudulmaz təcrübə yaradırıq.
            </p>
          </div>

          {/* Event Types Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className="group p-6 lg:p-8 bg-background rounded-sm border border-border/50 hover:border-primary/30 transition-all duration-500 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <event.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-background p-8 lg:p-12 rounded-sm border border-border/50">
            <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
              Xüsusi tədbirinizi planlaşdıraq?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Komandamız sizin istəklərinizə uyğun unikal tədbir planı hazırlayacaq. İlkin konsultasiya pulsuzdur.
            </p>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base tracking-wider uppercase"
            >
              <Link href="#elaqe">Bizimlə Əlaqə</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
