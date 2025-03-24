import { Button } from "@/components/ui/button"
import { CreditCard, Shield, Zap, Globe, Clock, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"
import { SimpleFooter } from "@/components/simple-footer"
import Image from "next/image"

const integrationTiers = [
  {
    name: "Starter",
    price: "299",
    description: "Basic payment integration for small businesses",
    features: [
      "Stripe Payment Integration",
      "PayPal Express Checkout",
      "Basic Payment Analytics",
      "Standard Support",
      "Basic Fraud Protection",
    ],
    notIncluded: ["Multiple Currency Support", "Subscription Management", "Advanced Analytics", "Custom Payment Flow"],
    href: "/projects/techally-ventures/payment-integration/starter",
    color: "blue",
  },
  {
    name: "Business",
    price: "799",
    description: "Advanced integration for growing businesses",
    features: [
      "Everything in Starter",
      "Multiple Currency Support",
      "Subscription Management",
      "Advanced Analytics",
      "Priority Support",
      "Enhanced Fraud Protection",
      "Custom Payment Pages",
    ],
    notIncluded: ["Enterprise-grade Security", "Dedicated Account Manager"],
    href: "/projects/techally-ventures/payment-integration/business",
    color: "purple",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "1499",
    description: "Full-featured solution for large businesses",
    features: [
      "Everything in Business",
      "Enterprise-grade Security",
      "Dedicated Account Manager",
      "Custom API Integration",
      "24/7 Premium Support",
      "Advanced Fraud Detection",
      "Multi-platform Integration",
    ],
    notIncluded: [],
    href: "/projects/techally-ventures/payment-integration/enterprise",
    color: "green",
  },
]

export default function PaymentIntegrationPage() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">Payment Integration Solutions</h1>

        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Secure and Seamless Payment Processing</h2>
          <p className="text-xl mb-6">Choose the right payment integration package for your business</p>
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Shield className="text-primary" />
              <span>Secure Transactions</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-primary" />
              <span>Fast Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="text-primary" />
              <span>Global Support</span>
            </div>
          </div>
        </section>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {integrationTiers.map((tier) => (
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
                    <CheckCircle2 className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
                {tier.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-400">
                    <XCircle className="text-gray-300" />
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
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Payment Integration?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <CreditCard className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Multiple Payment Options</h3>
              <p>Support for various payment methods to cater to all your customers</p>
            </div>
            <div>
              <Shield className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
              <p>State-of-the-art encryption and fraud protection measures</p>
            </div>
            <div>
              <Clock className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Quick Setup</h3>
              <p>Fast and easy integration process to get you up and running quickly</p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/schedule-consultation">Get Started Now</Link>
          </Button>
        </div>
      </main>

      <SimpleFooter />
    </div>
  )
}

