import { Button } from "@/components/ui/button"
import { TrendingUp, Globe, BarChart2, Target, Share2, Settings } from "lucide-react"
import Link from "next/link"
import { SimpleFooter } from "@/components/simple-footer"
import Image from "next/image"

const seoPackages = [
  {
    name: "Basic SEO",
    price: "399",
    description: "Essential SEO optimization for small websites",
    features: [
      "Keyword Research (10 keywords)",
      "On-page SEO Optimization",
      "Meta Tags Optimization",
      "Basic Content Analysis",
      "Monthly Performance Report",
    ],
    notIncluded: ["Technical SEO Audit", "Competitor Analysis", "Link Building", "Local SEO"],
    href: "/projects/techally-ventures/seo-optimization/basic",
    color: "blue",
  },
  {
    name: "Professional",
    price: "899",
    description: "Comprehensive SEO for growing businesses",
    features: [
      "Everything in Basic",
      "Advanced Keyword Research (30 keywords)",
      "Technical SEO Audit",
      "Competitor Analysis",
      "Content Strategy",
      "Link Building (10 quality backlinks)",
      "Local SEO Optimization",
      "Weekly Performance Reports",
    ],
    notIncluded: ["International SEO", "Custom Strategy Development"],
    href: "/projects/techally-ventures/seo-optimization/professional",
    color: "purple",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "1999",
    description: "Advanced SEO solutions for large websites",
    features: [
      "Everything in Professional",
      "Unlimited Keyword Research",
      "International SEO",
      "Custom Strategy Development",
      "Advanced Link Building (30+ quality backlinks)",
      "Content Creation and Optimization",
      "Conversion Rate Optimization",
      "24/7 Support",
    ],
    notIncluded: [],
    href: "/projects/techally-ventures/seo-optimization/enterprise",
    color: "green",
  },
]

export default function SEOOptimizationPage() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">SEO Optimization Solutions</h1>

        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Boost Your Online Visibility</h2>
          <p className="text-xl mb-6">Choose the right SEO package to improve your search engine rankings</p>
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-primary" />
              <span>Improved Rankings</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="text-primary" />
              <span>Increased Traffic</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart2 className="text-primary" />
              <span>Better Conversions</span>
            </div>
          </div>
        </section>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {seoPackages.map((pkg) => (
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
          <h2 className="text-3xl font-bold mb-4">Why Choose Our SEO Services?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <Target className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Targeted Strategies</h3>
              <p>Customized SEO plans tailored to your specific industry and goals</p>
            </div>
            <div>
              <Share2 className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Transparent Reporting</h3>
              <p>Regular updates and clear metrics to track your SEO progress</p>
            </div>
            <div>
              <Settings className="mx-auto text-primary mb-2" size={48} />
              <h3 className="text-xl font-semibold mb-2">Continuous Optimization</h3>
              <p>Ongoing adjustments to keep up with search engine algorithm changes</p>
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

