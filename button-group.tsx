import Link from "next/link"
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  navigation: [
    { label: "Haqqımızda", href: "#haqqimizda" },
    { label: "Menyu", href: "#menyu" },
    { label: "Rezervasiya", href: "#rezervasiya" },
    { label: "Qalereya", href: "#qalereya" },
    { label: "Əlaqə", href: "#elaqe" },
  ],
  legal: [
    { label: "Gizlilik Siyasəti", href: "/gizlilik" },
    { label: "İstifadə Şərtləri", href: "/sertler" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/hayalkahvesibaku", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/hayalkahvesibaku", label: "Facebook" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <span className="font-serif text-2xl text-foreground">
                  Hayal Kahvesi
                </span>
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bakının qəlbində yerləşən premium kafe və restoran. Hər ziyarətinizi xüsusi edən məkan.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-serif text-lg text-foreground mb-6">Naviqasiya</h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-lg text-foreground mb-6">Əlaqə</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>[Ünvan əlavə ediləcək]<br />Bakı, Azərbaycan</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>[+994 XX XXX XX XX]</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>[email@example.com]</span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-serif text-lg text-foreground mb-6">İş Saatları</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Bazar ertəsi - Cümə</span>
                  <span>[09:00 - 23:00]</span>
                </li>
                <li className="flex justify-between">
                  <span>Şənbə - Bazar</span>
                  <span>[10:00 - 00:00]</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Hayal Kahvesi Baku. Bütün hüquqlar qorunur.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
