import Link from "next/link"
import Image from "next/image"
import { Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const umrahPackages = [
  {
    name: "Essential Umrah Experience",
    hotelStars: 3,
    description: "A comprehensive Umrah package for those seeking a spiritual journey with comfortable accommodations.",
    duration: "10 days",
    groupSize: "20-30 pilgrims",
    price: 1500,
    rating: 4.5,
    href: "/projects/ally-voyage/umrah-packages/essential",
  },
  {
    name: "Premium Umrah Journey",
    hotelStars: 4,
    description:
      "An enhanced Umrah experience with premium accommodations and smaller group sizes for a more personalized journey.",
    duration: "14 days",
    groupSize: "15-20 pilgrims",
    price: 2500,
    rating: 4.8,
    href: "/projects/ally-voyage/umrah-packages/premium",
  },
  {
    name: "Luxury Umrah Retreat",
    hotelStars: 5,
    description:
      "The ultimate Umrah package featuring luxury accommodations, gourmet dining, and exclusive guided tours.",
    duration: "12 days",
    groupSize: "10-15 pilgrims",
    price: 3500,
    rating: 5.0,
    href: "/projects/ally-voyage/umrah-packages/luxury",
  },
]

export default function UmrahPackagesPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
            <Link href="/projects/ally-voyage" className="font-medium hover:text-primary">
              Ally Voyage
            </Link>
            <Link href="/about" className="font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Umrah Packages</h1>

        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Embark on a Spiritual Journey</h2>
          <p className="text-xl mb-6">
            Choose from our carefully curated Umrah packages designed to provide a meaningful and comfortable pilgrimage
            experience.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Available Umrah Packages</h3>
          <p className="text-lg mb-4">Price: Low to High</p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {umrahPackages.map((pkg) => (
              <Card key={pkg.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{pkg.name}</CardTitle>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {Array.from({ length: pkg.hotelStars }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="mb-4">{pkg.description}</p>
                  <ul className="mb-4 space-y-2 flex-grow">
                    <li>Duration: {pkg.duration}</li>
                    <li>Group Size: {pkg.groupSize}</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold">${pkg.price}</p>
                      <p className="text-sm text-muted-foreground">per person</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className="ml-1 font-semibold">{pkg.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <Button className="mt-4" asChild>
                    <Link href={pkg.href}>
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Our Umrah Packages?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p>Experienced guides to assist you throughout your spiritual journey</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Comfortable Accommodations</h3>
              <p>Carefully selected hotels to ensure a restful stay</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">All-Inclusive Packages</h3>
              <p>Hassle-free travel with all necessary arrangements taken care of</p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/projects/ally-voyage/umrah-packages/custom-inquiry">Inquire About Custom Packages</Link>
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

