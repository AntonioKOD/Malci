import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ContactCTAProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

export default function ContactCTA({
  title = "Ready to Transform Your Property?",
  description = "Contact us today for a free, no-obligation estimate on your paving or masonry project.",
  buttonText = "Get Your Free Estimate",
  buttonLink = "/contact",
}: ContactCTAProps) {
  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">{description}</p>
        <Link href={buttonLink}>
          <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg">{buttonText}</Button>
        </Link>
      </div>
    </section>
  )
}
