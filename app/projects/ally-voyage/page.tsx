import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Compass, ChurchIcon as Mosque, Search } from "lucide-react"

export default function AllyVoyagePage() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">Ally Voyage</h1>

        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Discover Your Next Adventure</h2>
          <p className="text-xl mb-6">
            Experience exceptional travel services with AllyVoyage. We create unforgettable journeys tailored to your
            preferences.
          </p>
          <Button size="lg" asChild>
            <Link href="#packages">Explore Packages</Link>
          </Button>
        </section>

        <div id="packages" className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Compass className="h-6 w-6" />
                Featured Travel Packages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Discover exciting destinations and unique experiences with our curated travel packages.
              </p>
              <Button variant="outline" asChild>
                <Link href="https://v0-cox-bazar-travel-project.vercel.app/">Explore Packages</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mosque className="h-6 w-6" />
                Umrah Packages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                An enhanced Umrah experience with premium accommodations and smaller group sizes for a more personalized
                journey.
              </p>
              <Button variant="outline" asChild>
                <Link href="https://v0-t-ally-umrah-packages.vercel.app/">Explore Packages</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="h-6 w-6" />
                Perfect Flight
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Flight search, real-time flight results, flight booking, and ticketing services.</p>
              <Button variant="outline" asChild>
                <Link href="https://mj-ahmad.github.io/TRUSTED-ALLY/ota/">Search Flight</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <section className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Ally Voyage?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <Compass className="mx-auto text-white mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Tailored Experiences</h3>
              <p>Customized travel plans to suit your preferences and interests</p>
            </div>
            <div className="text-center">
              <Plane className="mx-auto text-white mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Seamless Booking</h3>
              <p>Easy and efficient flight and accommodation booking process</p>
            </div>
            <div className="text-center">
              <Search className="mx-auto text-white mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p>Knowledgeable travel experts to assist you every step of the way</p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/contact">Start Planning Your Journey</Link>
          </Button>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Ally Voyage</h3>
              <p className="mb-4">Your trusted partner for exceptional travel experiences</p>
              <p className="text-sm">© 2025 Ally Voyage, All Rights Reserved.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">Email: info@allyvoyage.com</p>
              <p className="mb-2">Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Travel Street, Adventure City, 12345</p>
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

