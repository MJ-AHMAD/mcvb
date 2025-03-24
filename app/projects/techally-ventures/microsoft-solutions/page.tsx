import { Button } from "@/components/ui/button"
import { ComputerIcon as Windows, Cloud, Users, Shield, Database, Code2, Server, Globe } from "lucide-react"
import Link from "next/link"
import { SimpleFooter } from "@/components/simple-footer"
import Image from "next/image"

const microsoftSolutions = [
  {
    name: "Basic Microsoft Suite",
    price: "299",
    description: "Essential Microsoft solutions for small teams",
    features: [
      "Microsoft 365 Setup",
      "Basic Cloud Storage",
      "Email Configuration",
      "Basic Security Features",
      "Standard Support",
    ],
    notIncluded: ["Azure Services", "Custom Development", "Advanced Security", "Priority Support"],
    href: "/projects/techally-ventures/microsoft-solutions/basic",
    color: "blue",
  },
  {
    name: "Business Solutions",
    price: "799",
    description: "Comprehensive Microsoft services for businesses",
    features: [
      "Everything in Basic",
      "Azure Cloud Services",
      "SharePoint Implementation",
      "Teams Advanced Setup",
      "Advanced Security",
      "Power BI Integration",
      "Priority Support",
    ],
    notIncluded: ["Custom Development", "Enterprise Features"],
    href: "/projects/techally-ventures/microsoft-solutions/business",
    color: "purple",
    featured: true,
  },
  {
    name: "Enterprise Solutions",
    price: "1999",
    description: "Full-scale Microsoft implementation for enterprises",
    features: [
      "Everything in Business",
      "Custom Development",
      "Enterprise-grade Security",
      "Azure DevOps Integration",
      "Dynamics 365 Implementation",
      "24/7 Premium Support",
      "Dedicated Account Manager",
    ],
    notIncluded: [],
    href: "/projects/techally-ventures/microsoft-solutions/enterprise",
    color: "green",
  },
]

export default function MicrosoftSolutionsPage() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">Microsoft Solutions</h1>

        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Empower Your Business with Microsoft Technology</h2>
          <p className="text-xl mb-6">Choose the perfect Microsoft solution package for your organization</p>
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Windows className="text-primary" />
              <span>Microsoft 365</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="text-primary" />
              <span>Azure Cloud</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="text-primary" />
              <span>Advanced Security</span>
            </div>
          </div>
        </section>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {microsoftSolutions.map((solution) => (
            <div
              key={solution.name}
              className={`border rounded-lg p-6 ${solution.featured ? "border-primary shadow-lg" : "border-gray-200"}`}
            >
              <h3 className="text-2xl font-bold mb-2">{solution.name}</h3>
              <p className="text-3xl font-bold mb-4">${solution.price}/month</p>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="mb-6 space-y-2">
                {solution.features.map((feature) => (
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
                {solution.notIncluded.map((feature) => (
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
              <Button asChild className="w-full" variant={solution.featured ? "default" : "outline"}>
                <Link href={solution.href}>Choose Plan</Link>
              </Button>
            </div>
          ))}
        </div>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Microsoft Solutions?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <Users className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Expert Implementation</h3>
              <p>Our team of certified Microsoft professionals ensures smooth deployment and integration</p>
            </div>
            <div>
              <Database className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p>Our Microsoft packages grow with your business, from startup to enterprise</p>
            </div>
            <div>
              <Code2 className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
              <p>Tailor Microsoft solutions to fit your unique business needs and workflows</p>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Ready to Leverage Microsoft Technology?</h2>
          <p className="text-xl mb-6 text-center">
            Let us help you implement the perfect Microsoft solution for your business
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="flex items-center gap-2">
              <Link href="/schedule-consultation">
                <Server className="h-5 w-5" />
                <span>Schedule a Consultation</span>
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild className="flex items-center gap-2">
              <Link href="/schedule-consultation">
                <Globe className="h-5 w-5" />
                <span>Request a Demo</span>
              </Link>
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

