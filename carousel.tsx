"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

type MenuCategory = {
  id: string
  name: string
  items: { name: string; description: string; price: string }[]
}

const menuCategories: MenuCategory[] = [
  {
    id: "isti-ickiler",
    name: "İsti İçkilər",
    items: [
      { name: "Espresso", description: "Klassik italyan espresso", price: "[—] AZN" },
      { name: "Cappuccino", description: "Espresso, süd köpüyü", price: "[—] AZN" },
      { name: "Latte", description: "Espresso, zərif süd", price: "[—] AZN" },
      { name: "Türk Qəhvəsi", description: "Ənənəvi üsulla hazırlanır", price: "[—] AZN" },
      { name: "Çay Seçimi", description: "Müxtəlif çay növləri", price: "[—] AZN" },
    ],
  },
  {
    id: "soyuq-ickiler",
    name: "Soyuq İçkilər",
    items: [
      { name: "Buzlu Amerikano", description: "Soyuq espresso, su", price: "[—] AZN" },
      { name: "Buzlu Latte", description: "Soyuq espresso, süd", price: "[—] AZN" },
      { name: "Limonad", description: "Təzə sıxılmış limon", price: "[—] AZN" },
      { name: "Smoothie", description: "Meyvə smoothie seçimi", price: "[—] AZN" },
      { name: "Təzə Şirələr", description: "Mövsümi meyvələrdən", price: "[—] AZN" },
    ],
  },
  {
    id: "seher-yemeyi",
    name: "Səhər Yeməyi",
    items: [
      { name: "Azərbaycan Səhər Yeməyi", description: "Yumurta, pendir, bal, kərə yağı", price: "[—] AZN" },
      { name: "Klassik Səhər Yeməyi", description: "Yumurta, bekon, tost", price: "[—] AZN" },
      { name: "Avokado Toast", description: "Təzə avokado, yumurta", price: "[—] AZN" },
      { name: "Pancake", description: "Bal və meyvə ilə", price: "[—] AZN" },
      { name: "Granola Bowl", description: "Yoğurt, meyvə, bal", price: "[—] AZN" },
    ],
  },
  {
    id: "qelyanaltilar",
    name: "Qəlyanaltılar",
    items: [
      { name: "Pendir Lövhəsi", description: "Seçilmiş pendirlər", price: "[—] AZN" },
      { name: "Bruschetta", description: "Pomidor, reyhan, zeytun yağı", price: "[—] AZN" },
      { name: "Hummus", description: "Noxud püresi, zeytun yağı", price: "[—] AZN" },
      { name: "Qızarmış Kalmar", description: "Xüsusi sous ilə", price: "[—] AZN" },
      { name: "Çips və Salsa", description: "Ev yapımı sous", price: "[—] AZN" },
    ],
  },
  {
    id: "salatlar",
    name: "Salatlar",
    items: [
      { name: "Sezar Salatı", description: "Toyuq, parmezan, kruton", price: "[—] AZN" },
      { name: "Yunan Salatı", description: "Feta, zeytun, xiyar", price: "[—] AZN" },
      { name: "Quinoa Salatı", description: "Quinoa, göyərti, meyvə", price: "[—] AZN" },
      { name: "Ton Balıqlı Salat", description: "Ton balığı, avokado", price: "[—] AZN" },
      { name: "Mövsümi Salat", description: "Təzə göyərtilər", price: "[—] AZN" },
    ],
  },
  {
    id: "esas-yemekler",
    name: "Əsas Yeməklər",
    items: [
      { name: "Fil Miqnon", description: "Premium mal əti", price: "[—] AZN" },
      { name: "Qrilde Somon", description: "Norvec somonu", price: "[—] AZN" },
      { name: "Toyuq Şnitsel", description: "Xırtıldayan toyuq", price: "[—] AZN" },
      { name: "Pasta Carbonara", description: "Klassik italyan pastası", price: "[—] AZN" },
      { name: "Risotto", description: "Kremalı düyü yeməyi", price: "[—] AZN" },
    ],
  },
  {
    id: "desertler",
    name: "Desertlər",
    items: [
      { name: "Tiramisu", description: "İtalyan klasiki", price: "[—] AZN" },
      { name: "Çizkek", description: "Ev yapımı, təzə", price: "[—] AZN" },
      { name: "Şokolad Fondan", description: "İsti şokolad tortu", price: "[—] AZN" },
      { name: "Dondurma Seçimi", description: "3 top dondurma", price: "[—] AZN" },
      { name: "Meyvə Lövhəsi", description: "Təzə meyvələr", price: "[—] AZN" },
    ],
  },
  {
    id: "imza-ickiler",
    name: "İmza İçkilər",
    items: [
      { name: "Hayal Signature", description: "Xüsusi qəhvə kompozisiyası", price: "[—] AZN" },
      { name: "Baku Sunset", description: "Portağal, mango, ananas", price: "[—] AZN" },
      { name: "Caspi Breeze", description: "Nanə, limon, şəkər", price: "[—] AZN" },
      { name: "Golden Dream", description: "Bal, darçın, badam", price: "[—] AZN" },
      { name: "Mövsümi Xüsusi", description: "Şef tövsiyyəsi", price: "[—] AZN" },
    ],
  },
]

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)

  const currentCategory = menuCategories.find((cat) => cat.id === activeCategory)

  return (
    <section id="menyu" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
              Menyu
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              Dadlarımızı kəşf edin
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Təzə ingrediyentlər və peşəkar əllərlə hazırlanan hər yemək bir sənət əsəridir.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {menuCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`text-sm tracking-wider ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Menu Items */}
          {currentCategory && (
            <div className="max-w-3xl mx-auto">
              <div className="space-y-0">
                {currentCategory.items.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start py-6 group">
                      <div className="flex-1 pr-8">
                        <h4 className="font-serif text-lg lg:text-xl text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-muted-foreground text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                      <p className="font-serif text-lg text-primary whitespace-nowrap">
                        {item.price}
                      </p>
                    </div>
                    {index < currentCategory.items.length - 1 && (
                      <Separator className="bg-border/50" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Note */}
          <p className="text-center text-muted-foreground text-sm mt-12">
            * Qiymətlər dəyişə bilər. Allergen məlumatı üçün xidmətçimizlə əlaqə saxlayın.
          </p>
        </div>
      </div>
    </section>
  )
}
