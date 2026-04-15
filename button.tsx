"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const galleryImages = [
  { id: 1, title: "Əsas Salon", aspect: "landscape" },
  { id: 2, title: "Bar Bölməsi", aspect: "portrait" },
  { id: 3, title: "Açıq Terasa", aspect: "landscape" },
  { id: 4, title: "Xüsusi Otaq", aspect: "portrait" },
  { id: 5, title: "Qəhvə Guşəsi", aspect: "landscape" },
  { id: 6, title: "Axşam Atmosferi", aspect: "landscape" },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="qalereya" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
              Qalereya
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              Atmosferimizi hiss edin
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Hər küncü diqqətlə düzənlənmiş məkanımızda rahatlıq və zəriflik hiss edəcəksiniz.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(index)}
                className={`relative overflow-hidden rounded-sm group cursor-pointer ${
                  image.aspect === "portrait" ? "row-span-2" : ""
                }`}
              >
                <div
                  className={`bg-secondary ${
                    image.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
                  } w-full`}
                >
                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <div className="text-center p-4">
                      <p className="font-serif text-lg">{image.title}</p>
                      <p className="text-xs mt-1">Şəkil əlavə ediləcək</p>
                    </div>
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />
                </div>
              </button>
            ))}
          </div>

          {/* Lightbox */}
          <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl bg-background border-border p-0">
              <VisuallyHidden>
                <DialogTitle>
                  {selectedImage !== null ? galleryImages[selectedImage].title : "Qalereya şəkli"}
                </DialogTitle>
              </VisuallyHidden>
              <div className="relative aspect-video bg-secondary">
                {selectedImage !== null && (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <p className="font-serif text-2xl">{galleryImages[selectedImage].title}</p>
                      <p className="text-sm mt-2">Şəkil əlavə ediləcək</p>
                    </div>
                  </div>
                )}
                
                {/* Navigation */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground"
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Əvvəlki</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground"
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Növbəti</span>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
