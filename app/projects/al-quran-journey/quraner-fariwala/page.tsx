import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function QuranerFariwalaPage() {
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
            href="/projects/al-quran-journey"
            className="flex items-center gap-1 text-sm font-medium hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to AlQuranJourney
          </Link>
        </div>
      </header>

      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Quraner Fariwala</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Bridging the Gap in Islamic Education and Resources</h2>
          <p className="mb-4">
            Quraner Fariwala, an extraordinary organization based in London, is making a profound impact not only in the
            British Isles but also in Bangladesh. The name itself holds deep significance within the Bengali community,
            as it translates to "one who distributes or sells the Quran," the sacred book of Islam. However, Quraner
            Fariwala goes beyond mere distribution, embracing a noble mission that encompasses a wide range of
            educational support activities.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            The Core Mission: Printing, Supplying, and Distributing the Holy Quran
          </h2>
          <p className="mb-4">
            At the forefront of Quraner Fariwala's endeavors is the printing of the Holy Quran. In a world where access
            to religious texts is not always guaranteed, this organization ensures the availability of high-quality
            copies for distribution. They are not just suppliers; they are custodians of faith who understand the
            profound importance of the Quran in the daily lives of Muslims.
          </p>
          <p className="mb-4">
            Their distribution network is meticulously organized, ensuring that copies of the Holy Quran reach mosques,
            Islamic centers, educational institutions, and individuals across Bangladesh. This effort plays a pivotal
            role in promoting religious education and understanding, enabling believers to connect with their faith on a
            deeper level.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Educational Support Activities: A Pillar for Progress</h2>
          <p className="mb-4">
            Beyond the distribution of the Holy Quran, Quraner Fariwala takes a significant step in supporting Islamic
            education through various initiatives. Recognizing education as a fundamental right and a cornerstone for
            development, they provide essential learning materials to underprivileged students. By doing so, they not
            only facilitate academic growth but also ensure that financial constraints do not hinder the pursuit of
            knowledge.
          </p>
          <p className="mb-4">
            Furthermore, Quraner Fariwala extends its support to Islamic educational institutions that are often in dire
            need of resources and infrastructure. By equipping these institutions with necessary tools and facilities,
            the organization plays a crucial role in enhancing the quality of Islamic education. This strategic support
            benefits not only current students but also lays a strong foundation for future generations.
          </p>
        </section>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Advanced Printing Press and Research Facility</CardTitle>
            <CardDescription>A new initiative to enhance our mission</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Quraner Fariwala is embarking on an ambitious project to establish an advanced printing press and research
              facility in Dhaka. This state-of-the-art facility will significantly enhance our capacity to print and
              distribute the Holy Quran, as well as conduct valuable research to support Islamic education.
            </p>
            <p className="mb-4">
              The project includes the acquisition of 12 kathas of land, construction of a modern building housing the
              printing press, research lab, and office spaces, and installation of cutting-edge printing and research
              equipment.
            </p>
            <p className="mb-4">
              We invite you to be a part of this transformative initiative by becoming a shareholder in this spiritual
              mission. Your contribution will help us reach our goal and make a lasting impact on Islamic education and
              Quran distribution.
            </p>
            <div className="text-center">
              <Button asChild>
                <Link href="/projects/al-quran-journey/quraner-fariwala/advance-printing">Learn More</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">A Commitment to Community and Faith</h2>
          <p className="mb-4">
            Quraner Fariwala's approach is holistic; they are not merely an organization that provides resources—they
            are a beacon of hope for communities striving to maintain their religious and educational heritage. Their
            commitment to distributing the Holy Quran and supporting Islamic education reflects a deep understanding of
            the cultural and spiritual needs of Muslims in Bangladesh.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Challenges and Opportunities</h2>
          <p className="mb-4">
            Despite their commendable work, organizations like Quraner Fariwala face numerous challenges. Access to
            remote areas, funding constraints, and logistical hurdles are just a few of the obstacles that can impede
            their mission. However, with every challenge comes an opportunity—an opportunity to innovate, collaborate,
            and reach out to those who share their vision.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Conclusion: A Beacon for Islamic Education</h2>
          <p className="mb-4">
            Quraner Fariwala stands out as an exemplary model of how faith-based organizations can significantly
            contribute to social development and education. Their dedication to printing and distributing the Holy
            Quran, coupled with their educational support activities, has made them a vital pillar for many in
            Bangladesh.
          </p>
        </section>

        <div className="text-center">
          <Button asChild>
            <Link href="/projects/al-quran-journey/quraner-fariwala/quran-distribution">Support Our Mission</Link>
          </Button>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quraner Fariwala</h3>
              <p className="mb-4">Bridging the gap in Islamic education and resources</p>
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

