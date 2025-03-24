import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function QuranDistributionPage() {
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
          <Link
            href="/projects/al-quran-journey/quraner-fariwala"
            className="flex items-center gap-1 text-sm font-medium hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Quraner Fariwala
          </Link>
        </div>
      </header>

      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Quran Distribution Project: Illuminating Lives</h1>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Our Vision: Spreading Light Through Knowledge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                At Quraner Fariwala, we believe in the transformative power of the Holy Quran. Our mission is to bridge
                the gap in Islamic education by ensuring that every individual, regardless of their circumstances, has
                access to this sacred text.
              </p>
              <p>
                Through our Quran Distribution Project, we aim to print and distribute 50,000 high-quality copies of the
                Holy Quran across Bangladesh, illuminating lives and fostering spiritual growth in communities that need
                it most.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>The Impact of Your Support</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">50,000 Lives Touched</h3>
                  <p>
                    Your contribution helps us reach 50,000 individuals, providing them with their own copy of the Holy
                    Quran.
                  </p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Empowering Communities</h3>
                  <p>By supporting Islamic education, we strengthen the spiritual foundations of entire communities.</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Lasting Legacy</h3>
                  <p>
                    Your generosity creates a ripple effect, inspiring generations to come in their spiritual journey.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Transparency in Action</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">We believe in complete transparency. Here's how your donation is put to work:</p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Cost per 1,000 Copies (BDT)</TableHead>
                    <TableHead>Total for 50,000 Copies (BDT)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>High-Quality Paper</TableCell>
                    <TableCell>113,400</TableCell>
                    <TableCell>5,670,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Precise Printing</TableCell>
                    <TableCell>29,520</TableCell>
                    <TableCell>1,476,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Durable Cover & Packaging</TableCell>
                    <TableCell>75,000</TableCell>
                    <TableCell>3,750,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Efficient Transport</TableCell>
                    <TableCell>25,000</TableCell>
                    <TableCell>1,250,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Total Investment</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="font-bold">12,146,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Your Impact, Measured</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">We are committed to measuring and sharing the impact of your generosity:</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold mb-2">Distribution Reach</h3>
                  <ul className="list-disc pl-5">
                    <li>Number of Qurans distributed</li>
                    <li>Geographical coverage across Bangladesh</li>
                    <li>Types of institutions and communities reached</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Educational Impact</h3>
                  <ul className="list-disc pl-5">
                    <li>Increase in Quranic study groups</li>
                    <li>Testimonials from recipients</li>
                    <li>Long-term effects on community spiritual growth</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Join Us in This Noble Cause</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Your support goes beyond just distributing books; it's about enlightening minds, uplifting spirits, and
                strengthening communities. By contributing to the Quran Distribution Project, you become a beacon of
                hope and knowledge.
              </p>
              <p className="mb-4">
                We invite individuals, businesses, and organizations to be part of this transformative journey. Your
                contribution, regardless of size, makes a significant impact in spreading the light of the Quran.
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/projects/al-quran-journey/quraner-fariwala/quran-distribution/donate">Donate Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quraner Fariwala</h3>
              <p className="mb-4">Illuminating lives through the wisdom of the Quran</p>
              <p className="text-sm">© 2025 Quraner Fariwala, All Rights Reserved.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">Email: info@qfbd.org</p>
              <p className="mb-2">Phone: +44 14 4057 4345</p>
              <p>Address: 121 Islamic Center, Ally St, London, UK</p>
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

