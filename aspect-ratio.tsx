import Link from "next/link"
import { MapPin, Phone, Clock, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    label: "Ünvan",
    value: "[Ünvan əlavə ediləcək]",
    subtext: "Bakı, Azərbaycan",
  },
  {
    icon: Phone,
    label: "Əlaqə Nömrəsi",
    value: "[+994 XX XXX XX XX]",
    subtext: "WhatsApp da mövcuddur",
  },
  {
    icon: Clock,
    label: "İş Saatları",
    value: "[09:00 - 23:00]",
    subtext: "Hər gün açıqdır",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@hayalkahvesibaku",
    subtext: "Bizi izləyin",
    href: "https://instagram.com/hayalkahvesibaku",
  },
]

export function Contact() {
  return (
    <section id="elaqe" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
              Əlaqə
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              Bizimlə əlaqə saxlayın
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Suallarınız və ya rezervasiya üçün aşağıdakı vasitələrlə bizimlə əlaqə saxlaya bilərsiniz.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 bg-card rounded-sm border border-border/50 text-center group hover:border-primary/30 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                  {item.label}
                </p>
                {item.href ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-lg text-foreground hover:text-primary transition-colors block mb-1"
                  >
                    {item.value}
                  </Link>
                ) : (
                  <p className="font-serif text-lg text-foreground mb-1">{item.value}</p>
                )}
                <p className="text-muted-foreground text-sm">{item.subtext}</p>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="bg-card rounded-sm border border-border/50 overflow-hidden">
            <div className="aspect-[21/9] bg-secondary relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                <MapPin className="w-12 h-12 mb-4 text-primary/50" />
                <p className="font-serif text-xl mb-2">Xəritə</p>
                <p className="text-sm">Google Maps əlavə ediləcək</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base tracking-wider uppercase"
            >
              <Link href="tel:+994XXXXXXXX">Zəng Et</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground/50 px-8 py-6 text-base tracking-wider uppercase"
            >
              <Link href="https://wa.me/994XXXXXXXX" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
