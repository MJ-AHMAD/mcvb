import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, CreditCard, Search, Wrench, ShoppingCart, Cpu } from "lucide-react"

export default function TechAllyVenturesPage() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">TechAlly Ventures</h1>

        <section className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4">Limited Time Offer</h2>
          <p className="text-xl mb-4">30% Discount For This Summer</p>
          <p className="mb-6">Don't miss out on our special summer promotion for all web development services</p>
          <Button size="lg" variant="secondary">
            Claim Discount
          </Button>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Unlock the Power of Web Development with Us!</h2>
          <p className="text-xl">The Best Service For You</p>
        </section>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6" />
                Web Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Creating responsive and dynamic websites using HTML, CSS, JS, PHP.</p>
              <Button variant="outline" asChild>
                <Link href="/projects/techally-ventures/web-development">View Pricing</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-6 w-6" />
                Payment Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Implementing secure and efficient payment solutions with Stripe and PayPal</p>
              <Button variant="outline" asChild>
                <Link href="/projects/techally-ventures/payment-integration">View Solutions</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-6 w-6" />
                SEO Optimization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Enhancing your website's visibility on search engines to attract more traffic.</p>
              <Button variant="outline" asChild>
                <Link href="/projects/techally-ventures/seo-optimization">Boost Your Rankings</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-6 w-6" />
                Technical Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Providing ongoing maintenance and support for your web projects.</p>
              <Button variant="outline" asChild>
                <Link href="/projects/techally-ventures/technical-support">View Support Plans</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-6 w-6" />
                E-commerce Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Setting up and managing online stores to help you reach a broader audience.</p>
              <Button variant="outline" asChild>
                <Link href="/projects/techally-ventures/ecommerce-solutions">Start Selling</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="h-6 w-6" />
                Microsoft Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Leveraging our Microsoft Partner status to provide top-notch services.</p>
              <Button variant="outline" asChild>
                <Link href="/projects/techally-ventures/microsoft-solutions">Explore Solutions</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg">Get Started Now</Button>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-100 py-12">{/* Footer content */}</footer>
    </div>
  )
}

