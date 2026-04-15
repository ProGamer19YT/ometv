import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a962' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle */}
          <p className="text-primary tracking-[0.3em] uppercase text-sm md:text-base mb-6 animate-fade-in">
            Bakı, Azərbaycan
          </p>
          
          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-6 leading-tight text-balance">
            Hər anı xüsusi edən məkan
          </h1>
          
          {/* Subheadline */}
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Zərif atmosfer, seçilmiş dadlar və unudulmaz xatirələr üçün sizləri Hayal Kahvesiyə dəvət edirik.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base tracking-wider uppercase min-w-[200px]"
            >
              <Link href="#rezervasiya">Masa Rezerv Et</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground/50 px-8 py-6 text-base tracking-wider uppercase min-w-[200px]"
            >
              <Link href="#menyu">Menyuya Bax</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <Link href="#haqqimizda" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="h-8 w-8" />
          <span className="sr-only">Aşağı diyirləyin</span>
        </Link>
      </div>
    </section>
  )
}
