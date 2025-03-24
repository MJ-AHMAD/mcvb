import { Button } from "@/components/ui/button"
import { Headphones, Clock, Shield, LifeBuoy, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { SimpleFooter } from "@/components/simple-footer"
import Image from "next/image"

const supportPlans = [
  {
    name: "Basic Support",
    price: "199",
    description: "Essential support for small businesses",
    features: [
      "Email Support",
      "Response Time: 24 hours",
      "Basic Troubleshooting",
      "Monthly Maintenance",
      "Security Updates",
    ],
    notIncluded: ["24/7 Phone Support", "Priority Response", "Custom Development", "Dedicated Support Agent"],
    href: "/projects/techally-ventures/technical-support/basic",
    color: "blue",
  },
  {
    name: "Business Support",
    price: "499",
    description: "Comprehensive support for growing businesses",
    features: [
      "Everything in Basic",
      "24/7 Phone Support",
      "Response Time: 4 hours",
      "Advanced Troubleshooting",
      "Weekly Maintenance",
      "Security Monitoring",
      "Performance Optimization",
    ],
    notIncluded: ["Custom Development", "Dedicated Support Agent"],
    href: "/projects/techally-ventures/technical-support/business",
    color: "purple",
    featured: true,
  },
  {
    name: "Enterprise Support",
    price: "999",
    description: "Premium support for large organizations",
    features: [
      "Everything in Business",
      "Response Time: 1 hour",
      "Custom Development",
      "Dedicated Support Agent",
      "24/7 Monitoring",
      "Quarterly Strategy Reviews",
      "Disaster Recovery Planning",
    ],
    notIncluded: [],
    href: "/projects/techally-ventures/technical-support/enterprise",
    color: "green",
  },
]

export default function TechnicalSupportPage() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">Technical Support Plans</h1>

        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Expert Support for Your Web Projects</h2>
          <p className="text-xl mb-6">Choose the right support plan to keep your website running smoothly</p>
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Headphones className="text-primary" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-primary" />
              <span>Fast Response Times</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="text-primary" />
              <span>Security Updates</span>
            </div>
          </div>
        </section>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {supportPlans.map((plan) => (
            <div
              key={plan.name}
              className={`border rounded-lg p-6 ${plan.featured ? "border-primary shadow-lg" : "border-gray-200"}`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">${plan.price}/month</p>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature) => (
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
                {plan.notIncluded.map((feature) => (
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
              <Button asChild className="w-full" variant={plan.featured ? "default" : "outline"}>
                <Link href={plan.href}>Choose Plan</Link>
              </Button>
            </div>
          ))}
        </div>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Technical Support?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <LifeBuoy className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Expert Assistance</h3>
              <p>Our team of skilled professionals is ready to help you with any technical issues</p>
            </div>
            <div>
              <Clock className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Quick Response Times</h3>
              <p>We prioritize your needs and provide timely solutions to minimize downtime</p>
            </div>
            <div>
              <Shield className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Proactive Maintenance</h3>
              <p>We don't just fix issues; we prevent them with regular updates and monitoring</p>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Need Immediate Assistance?</h2>
          <p className="text-xl mb-6 text-center">Our support team is available 24/7 to help you</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="flex items-center gap-2" asChild>
              <a href="tel:+15642248810">
                <Phone className="h-5 w-5" />
                <span>Call Support</span>
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="flex items-center gap-2" asChild>
              <a href="mailto:t-ally@outlook.com">
                <Mail className="h-5 w-5" />
                <span>Email Support</span>
              </a>
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

