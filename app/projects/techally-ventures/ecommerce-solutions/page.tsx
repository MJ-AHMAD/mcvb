import { Button } from "@/components/ui/button"
import { ShoppingCart, CreditCard, BarChart2, Truck, Package, Gift, Smartphone, Settings } from "lucide-react"
import Link from "next/link"
import { SimpleFooter } from "@/components/simple-footer"
import Image from "next/image"

const ecommercePackages = [
  {
    name: "Starter Store",
    price: "999",
    description: "Perfect for new online businesses",
    features: [
      "Basic Online Store Setup",
      "Up to 100 Products",
      "Basic Payment Gateway",
      "Mobile Responsive Design",
      "Basic SEO Setup",
    ],
    notIncluded: ["Advanced Analytics", "Multiple Payment Gateways", "Inventory Management", "Marketing Tools"],
    href: "/contact?plan=ecom-starter",
    color: "blue",
  },
  {
    name: "Professional Store",
    price: "2499",
    description: "Advanced features for growing businesses",
    features: [
      "Everything in Starter",
      "Up to 1000 Products",
      "Multiple Payment Gateways",
      "Inventory Management",
      "Advanced Analytics",
      "Marketing Tools Integration",
      "Priority Support",
    ],
    notIncluded: ["Custom Features", "API Integration"],
    href: "/contact?plan=ecom-professional",
    color: "purple",
    featured: true,
  },
  {
    name: "Enterprise Store",
    price: "4999",
    description: "Full-featured solution for large businesses",
    features: [
      "Everything in Professional",
      "Unlimited Products",
      "Custom Features Development",
      "API Integration",
      "Dedicated Account Manager",
      "24/7 Premium Support",
      "Advanced Security Features",
    ],
    notIncluded: [],
    href: "/contact?plan=ecom-enterprise",
    color: "green",
  },
]

export default function EcommerceSolutionsPage() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">E-commerce Solutions</h1>

        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Launch Your Online Store Today</h2>
          <p className="text-xl mb-6">Choose the perfect e-commerce package to start selling online</p>
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <ShoppingCart className="text-primary" />
              <span>Easy Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="text-primary" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart2 className="text-primary" />
              <span>Sales Analytics</span>
            </div>
          </div>
        </section>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {ecommercePackages.map((pkg) => (
            <div
              key={pkg.name}
              className={`border rounded-lg p-6 ${pkg.featured ? "border-primary shadow-lg" : "border-gray-200"}`}
            >
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-3xl font-bold mb-4">${pkg.price}</p>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              <ul className="mb-6 space-y-2">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500 h-5 w-5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
                {pkg.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-300 h-5 w-5"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full" variant={pkg.featured ? "default" : "outline"}>
                <Link href={pkg.href}>Choose Plan</Link>
              </Button>
            </div>
          ))}
        </div>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our E-commerce Solutions?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <Truck className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Fast Setup</h3>
              <p>Get your online store up and running quickly with our easy-to-use platform</p>
            </div>
            <div>
              <Package className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p>Our e-commerce packages grow with your business, from startup to enterprise</p>
            </div>
            <div>
              <Gift className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Customizable Design</h3>
              <p>Create a unique online store that reflects your brand identity</p>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Ready to Start Selling Online?</h2>
          <p className="text-xl mb-6 text-center">
            Let us help you create the perfect e-commerce solution for your business
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="flex items-center gap-2">
              <Link href="/schedule-consultation">
                <Smartphone className="h-5 w-5" />
                <span>Schedule a Demo</span>
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              <span>Customize Your Store</span>
            </Button>
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

