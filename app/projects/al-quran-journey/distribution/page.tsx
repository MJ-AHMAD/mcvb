import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function DistributionPage() {
  return (
    <div className="min-h-screen bg-muted">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://mj-ahmad.github.io/mja2025/img/logo.png"
              alt="TRUSTED-ALLY Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl">TRUSTED-ALLY</span>
          </Link>
          <Link
            href="/projects/al-quran-journey"
            className="flex items-center gap-1 text-sm font-medium hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to AlQuranJourney
          </Link>
        </div>
      </header>

      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Distribution</h1>
        <p className="text-center mb-8">
          Our extensive distribution network ensures the Holy Quran reaches mosques, Islamic centers, and individuals
          across Bangladesh.
        </p>
        {/* Add more content about distribution process here */}
      </main>

      <footer className="bg-gray-900 text-gray-100 py-12">{/* Footer content */}</footer>
    </div>
  )
}

