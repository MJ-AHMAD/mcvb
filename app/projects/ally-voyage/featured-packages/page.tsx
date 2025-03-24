import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Globe2, Mail, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturedPackagesPage() {
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

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Your Next Adventure</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Experience exceptional travel services with AllyVoyage. We create unforgettable journeys tailored to your
              preferences.
            </p>
            <Link href="https://v0-cox-bazar-travel-project.vercel.app/" className="font-medium hover:text-primary">
              View All Packages
            </Link>
          </div>
        </section>

        {/* Featured Packages */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Travel Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Domestic Getaways</CardTitle>
                  <CardDescription>Explore the beauty of local destinations</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="https://mj-ahmad.github.io/my-life/img/dom.png"
                    alt="Domestic travel"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="mb-4">Discover hidden gems and breathtaking landscapes in your own backyard.</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/projects/ally-voyage/featured-packages/domestic-getaways">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>European Adventures</CardTitle>
                  <CardDescription>Immerse yourself in rich history and culture</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="European travel"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="mb-4">Experience the charm of ancient cities and picturesque countryside.</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/projects/ally-voyage/featured-packages/european-adventures">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tropical Escapes</CardTitle>
                  <CardDescription>Relax on pristine beaches and crystal-clear waters</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Tropical travel"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="mb-4">Unwind in paradise with our curated selection of island getaways.</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/projects/ally-voyage/featured-packages/tropical-escapes">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cox's Bazar Packages */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Cox's Bazar Sea Beach Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cox's Bazar Sunset Bliss</CardTitle>
                  <CardDescription>3 Days of Beachside Relaxation</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Cox's Bazar sunset"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="mb-4">
                    Experience breathtaking sunsets and serene beach walks in the world's longest natural sea beach.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/projects/ally-voyage/featured-packages/coxs-bazar-sunset-bliss">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cox's Bazar Adventure Week</CardTitle>
                  <CardDescription>7 Days of Excitement and Relaxation</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Cox's Bazar water sports"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="mb-4">
                    Combine thrilling water sports with peaceful beach days in this week-long adventure package.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/projects/ally-voyage/featured-packages/coxs-bazar-adventure-week">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cox's Bazar Luxury Retreat</CardTitle>
                  <CardDescription>5 Days of Indulgence and Serenity</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Cox's Bazar luxury resort"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="mb-4">
                    Immerse yourself in luxury with beachfront accommodations, spa treatments, and gourmet dining.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/projects/ally-voyage/featured-packages/coxs-bazar-luxury-retreat">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose AllyVoyage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Globe2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Expertise</h3>
                <p>Our team of travel experts brings you the best experiences from around the world.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Safe and Secure</h3>
                <p>Your safety is our top priority. We ensure all our packages meet the highest safety standards.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Star className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
                <p>We tailor each journey to your preferences, ensuring a unique and memorable experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8">Contact us today to plan your perfect getaway.</p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="mailto:t-ally@outlook.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>Contact Us</span>
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container mx-auto px-4">
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

