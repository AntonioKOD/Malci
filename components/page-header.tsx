import Image from "next/image"

interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function PageHeader({
  title,
  subtitle,
  backgroundImage = "/placeholder.svg?key=header",
}: PageHeaderProps) {
  return (
    <div className="relative h-[300px] md:h-[400px] bg-slate-800 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/70 z-10"></div>
      <div className="absolute inset-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt={title}
          width={1200}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">{title}</h1>
        {subtitle && <p className="text-lg text-slate-100 max-w-2xl animate-fade-in-up delay-100">{subtitle}</p>}
      </div>
    </div>
  )
}
