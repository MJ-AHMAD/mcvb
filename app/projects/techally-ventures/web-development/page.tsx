import { Button } from "@/components/ui/button"
import { Code2, CheckCircle2, XCircle, Laptop, Zap, Users } from "lucide-react"
import Link from "next/link"
import { SimpleFooter } from "@/components/simple-footer"
import Image from "next/image"

const pricingTiers = [
  {
    name: "Basic",
    price: "499",
    description: "Perfect for small business websites",
    features: ["Responsive Design", "5 Pages", "Contact Form", "Basic SEO", "Mobile Friendly"],
    notIncluded: ["Custom Animations", "E-commerce Features", "Database Integration", "Admin Dashboard"],
    href: "/projects/techally-ventures/web-development/basic",
    color: "blue",
  },
  {
    name: "Professional",
    price: "999",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Basic",
      "Up to 10 Pages",
      "Custom Animations",
      "Content Management System",
      "Advanced SEO",
      "Social Media Integration",
      "Performance Optimization",
    ],
    notIncluded: ["E-commerce Features", "Custom Admin Dashboard"],
    href: "/projects/techally-ventures/web-development/professional",
    color: "purple",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "1999",
    description: "Full-featured solution for large businesses",
    features: [
      "Everything in Professional",
      "Unlimited Pages",
      "E-commerce Integration",
      "Custom Admin Dashboard",
      "Advanced Analytics",
      "Priority Support",
      "Regular Updates",
      "Custom Functionality",
    ],
    notIncluded: [],
    href: "/projects/techally-ventures/web-development/enterprise",
    color: "green",
  },
]

export default function WebDevelopmentPage() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">Web Development Services</h1>

        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Create Your Perfect Website</h2>
          <p className="text-xl mb-6">Choose the right web development package for your business</p>
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Code2 className="text-primary" />
              <span>Custom Design</span>
            </div>
            <div className="flex items-center gap-2">
              <Laptop className="text-primary" />
              <span>Responsive</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-primary" />
              <span>Fast Performance</span>
            </div>
          </div>
        </section>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`border rounded-lg p-6 ${tier.featured ? "border-primary shadow-lg" : "border-gray-200"}`}
            >
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-3xl font-bold mb-4">${tier.price}</p>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              <ul className="mb-6 space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500 h-5 w-5" />
                    <span>{feature}</span>
                  </li>
                ))}
                {tier.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-400">
                    <XCircle className="text-gray-300 h-5 w-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full" variant={tier.featured ? "default" : "outline"}>
                <Link href={tier.href}>Choose Plan</Link>
              </Button>
            </div>
          ))}
        </div>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Web Development Services?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <Code2 className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
              <p>Unique websites tailored to your brand and business needs</p>
            </div>
            <div>
              <Laptop className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Responsive Development</h3>
              <p>Websites that look great on all devices, from mobile to desktop</p>
            </div>
            <div>
              <Users className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">User-Centric Approach</h3>
              <p>Focus on creating intuitive and engaging user experiences</p>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Ready to Start Your Web Project?</h2>
          <p className="text-xl mb-6 text-center">
            Let's create a website that perfectly represents your brand and engages your audience
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="flex items-center gap-2">
              <Link href="/schedule-consultation">
                <Code2 className="h-5 w-5" />
                <span>Schedule a Consultation</span>
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="flex items-center gap-2">
              <Laptop className="h-5 w-5" />
              <span>View Our Portfolio</span>
            </Button>
          </div>
        </section>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/projects/techally-ventures/web-development/get-started">Get Started Now</Link>
          </Button>
        </div>
      </main>

      <SimpleFooter />
    </div>
  )
}

