import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Rezervasiya etmədən gələ bilərəmmi?",
    answer: "Bəli, rezervasiya etmədən də gələ bilərsiniz. Lakin, axşam saatlarında və həftə sonları yer tapmaq çətin ola bilər. Rahat təcrübə üçün əvvəlcədən rezervasiya etməyi tövsiyə edirik.",
  },
  {
    question: "Uşaqlar üçün xüsusi menyu varmı?",
    answer: "Bəli, uşaqlar üçün xüsusi hazırlanmış menyu seçimimiz var. Sağlam və dadlı yeməklərlə kiçik qonaqlarımızı da sevindiririk.",
  },
  {
    question: "Vegetarian və vegan seçimlər varmı?",
    answer: "Əlbəttə! Menyumuzda müxtəlif vegetarian və vegan seçimlər var. Xüsusi pəhriz tələbləriniz varsa, xidmətçimizlə əlaqə saxlayın.",
  },
  {
    question: "Ödəniş üsulları hansılardır?",
    answer: "Nağd, bank kartları (Visa, MasterCard) və mobil ödəniş sistemlərini qəbul edirik.",
  },
  {
    question: "Parkinq imkanı varmı?",
    answer: "Bəli, məkanımızın yaxınlığında pulsuz parkinq sahəsi mövcuddur. Dəqiq məlumat üçün bizimlə əlaqə saxlayın.",
  },
  {
    question: "Xüsusi tədbirlər üçün bütün məkanı kirayə edə bilərəmmi?",
    answer: "Bəli, böyük tədbirlər üçün bütün məkanı və ya xüsusi otaqları kirayə vermək mümkündür. Şərtlər və qiymətlər üçün əvvəlcədən bizimlə əlaqə saxlayın.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
              Suallar
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              Tez-tez verilən suallar
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border/50 rounded-sm px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
