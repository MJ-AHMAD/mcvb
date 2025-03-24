import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Book, Cpu, Plane } from "lucide-react"

export default function ProjectsPage() {
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
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="font-medium hover:text-primary">
              About Us
            </Link>
            <Link href="/projects" className="font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="/environmental-development" className="font-medium hover:text-primary">
              News + Media
            </Link>
            <Link href="/about" className="font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Projects</h1>

        <div className="grid gap-12">
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
              <Book className="h-8 w-8 text-primary" />
              AlQuranJourney
            </h2>
            <p className="mb-4">
              AlQuranJourney is a project under TrustedAlly focused on the research, printing, and distribution of the
              Holy Quran. This project aims to provide spiritual peace and enlightenment through the dissemination of
              the Quran, without any commercial intent.
            </p>
            <h3 className="text-xl font-semibold mb-2">Project Objectives:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Conduct in-depth research on the Holy Quran.</li>
              <li>Print and distribute copies of the Quran.</li>
              <li>Promote spiritual well-being and understanding through the Quran.</li>
            </ul>
            <Button asChild>
              <Link href="/projects/al-quran-journey">Learn More</Link>
            </Button>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
              <Cpu className="h-8 w-8 text-primary" />
              TechAlly Ventures
            </h2>
            <p className="mb-4">
              TechAlly Ventures is a comprehensive Online Marketing and Advertising platform under the umbrella of
              TRUSTED ALLY. Our mission is to create a robust and dynamic platform that integrates various cutting-edge
              tools and APIs to facilitate effective and efficient digital marketing strategies. The economic benefits
              generated from this project will be utilized to further the initiatives of TRUSTED ALLY, contributing to
              educational and societal advancements in Bangladesh.
            </p>
            <h3 className="text-xl font-semibold mb-2">A Project by TRUSTED ALLY</h3>
            <p className="mb-6">
              TechAlly Ventures is an integral part of the TRUSTED ALLY initiative. TRUSTED ALLY aims to promote
              widespread education and create an ideal society. TechAlly Ventures supports these goals by generating
              revenue that funds other TRUSTED ALLY projects and activities, thus working hand in hand to achieve a
              brighter future.
            </p>
            <Button asChild>
              <Link href="/projects/techally-ventures">Learn More</Link>
            </Button>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
              <Plane className="h-8 w-8 text-primary" />
              Ally Voyage
            </h2>
            <p className="mb-4">
              AllyVoyage is a project under TrustedAlly focused on providing exceptional tour and travel services. This
              project aims to offer unique travel experiences and comprehensive travel solutions to clients worldwide.
            </p>
            <h3 className="text-xl font-semibold mb-2">Project Objectives:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide customized travel packages tailored to client preferences.</li>
              <li>Ensure safe and enjoyable travel experiences.</li>
              <li>Offer comprehensive support and assistance throughout the travel journey.</li>
            </ul>
            <Button asChild>
              <Link href="/projects/ally-voyage">Learn More</Link>
            </Button>
          </section>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">TRUSTED-ALLY</h3>
              <p className="mb-4">Together Towards a Brighter Future</p>
              <p className="text-sm">© 2025 Trusted Ally, All Rights Reserved.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">Email: t-ally@outlook.com</p>
              <p className="mb-2">Phone: +44 144 0574345</p>
              <p>Address: 121 Islamic Center,Ally St, London, UK</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary">
                  Facebook
                </a>
                <a href="#" className="hover:text-primary">
                  Twitter
                </a>
                <a href="#" className="hover:text-primary">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

