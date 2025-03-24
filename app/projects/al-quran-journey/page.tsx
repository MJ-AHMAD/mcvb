import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Printer, TruckIcon, Heart, Users, Search } from "lucide-react"

export default function AlQuranJourneyPage() {
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
            <Link href="/contact" className="font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">AlQuranJourney</h1>

        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Bridging the Gap in Islamic Education and Resources</h2>
          <p className="text-xl mb-6">
            AlQuranJourney is dedicated to printing, supplying, and distributing the Holy Quran, as well as supporting
            Islamic education through various initiatives.
          </p>
        </section>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-6 w-6" />
                Quraner Fariwala
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Discover the extraordinary organization making a profound impact in the British Isles and Bangladesh,
                distributing the Quran and supporting Islamic education.
              </p>
              <Button variant="outline" asChild>
                <Link href="/projects/al-quran-journey/quraner-fariwala">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-6 w-6" />
                Research
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our dedicated research team works tirelessly to ensure the accuracy and authenticity of our Quranic
                publications.
              </p>
              <Button variant="outline" asChild>
                <Link href="/projects/al-quran-journey/research">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Printer className="h-6 w-6" />
                Printing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We use state-of-the-art printing technology to produce high-quality copies of the Holy Quran.
              </p>
              <Button variant="outline" asChild>
                <Link href="/projects/al-quran-journey/printing">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TruckIcon className="h-6 w-6" />
                Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our extensive distribution network ensures the Holy Quran reaches mosques, Islamic centers, and
                individuals across Bangladesh.
              </p>
              <Button variant="outline" asChild>
                <Link href="/projects/al-quran-journey/distribution">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                Donation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Support our mission to spread Islamic knowledge and education through your generous donations.
              </p>
              <Button variant="outline" asChild>
                <Link href="https://whydonate.com/en/fundraising/support-the-largest-quran-printing-company">Donate</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                Administration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our dedicated team ensures the smooth operation of all aspects of the AlQuranJourney project.
              </p>
              <Button variant="outline" asChild>
                <Link href="https://v0-al-quran-journey-project.vercel.app/">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <section className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Impact</h2>
          <p className="text-xl mb-6 text-center">
            AlQuranJourney has distributed over 100,000 copies of the Holy Quran and supported 500+ Islamic educational
            institutions.
          </p>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">AlQuranJourney</h3>
              <p className="mb-4">Bridging the gap in Islamic education and resources</p>
              <p className="text-sm">© 2025 AlQuranJourney, All Rights Reserved.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">Email: info@qfbd.org</p>
              <p className="mb-2">Phone: +44 144 0574345</p>
              <p>Address: 121 Islamic Center St, London, UK</p>
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
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

