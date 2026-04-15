"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"

export function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    note: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Reservation submitted:", formData)
    alert("Rezervasiya sorğunuz qəbul edildi. Tezliklə sizinlə əlaqə saxlayacağıq.")
  }

  return (
    <section id="rezervasiya" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Text Content */}
            <div>
              <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
                Rezervasiya
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight text-balance">
                Masanızı indi rezerv edin
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">
                Xüsusi anlarınız üçün mükəmməl masa hazırlayaq. Formu doldurun, komandamız sizinlə əlaqə saxlayaraq rezervasiyanızı təsdiqləyəcək.
              </p>
              
              {/* Info Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-sm border border-border/50">
                  <Calendar className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">Qrup rezervasiyaları</p>
                    <p className="text-muted-foreground text-sm">8+ nəfər üçün xüsusi şərtlər. Bizimlə əvvəlcədən əlaqə saxlayın.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-sm border border-border/50">
                  <Calendar className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">Xüsusi tədbirlər</p>
                    <p className="text-muted-foreground text-sm">Ad günləri, nişan mərasimləri və korporativ tədbirlər üçün xidmət.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card p-8 lg:p-10 rounded-sm border border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground text-sm tracking-wider uppercase">
                    Ad *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Adınızı daxil edin"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground text-sm tracking-wider uppercase">
                    Telefon Nömrəsi *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+994 XX XXX XX XX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-foreground text-sm tracking-wider uppercase">
                      Qonaq Sayı *
                    </Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, guests: value })}>
                      <SelectTrigger className="bg-background border-border/50 text-foreground">
                        <SelectValue placeholder="Seçin" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} nəfər
                          </SelectItem>
                        ))}
                        <SelectItem value="8+">8+ nəfər</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-foreground text-sm tracking-wider uppercase">
                      Tarix *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      className="bg-background border-border/50 text-foreground focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="text-foreground text-sm tracking-wider uppercase">
                    Saat *
                  </Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, time: value })}>
                    <SelectTrigger className="bg-background border-border/50 text-foreground">
                      <SelectValue placeholder="Saat seçin" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"].map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="note" className="text-foreground text-sm tracking-wider uppercase">
                    Qeyd
                  </Label>
                  <Textarea
                    id="note"
                    placeholder="Xüsusi istəkləriniz, allergiyalar və s."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    rows={4}
                    className="bg-background border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base tracking-wider uppercase"
                >
                  Rezervasiya Et
                </Button>

                <p className="text-muted-foreground text-xs text-center">
                  * Komandamız rezervasiyanızı təsdiqləmək üçün sizinlə əlaqə saxlayacaq.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
