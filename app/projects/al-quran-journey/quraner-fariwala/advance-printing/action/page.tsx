import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ActionPage() {
  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-center">
            🌟 Join Us as a Lifetime Member and Shareholder in a Spiritual Mission! 🌟
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Quraner Fariwala is excited to announce a unique opportunity to become a lifetime member and shareholder in
            our mission to establish an advanced printing press and research facility in Dhaka. This Ramadan, we invite
            you to be part of this noble cause and contribute to the widespread dissemination of the Holy Quran.
          </p>

          <h3 className="text-xl font-semibold mb-2">🔹 Our Vision:</h3>
          <p className="mb-4">
            To print and distribute 50,000 copies of the Holy Quran, fostering spiritual growth and Islamic education
            within underprivileged communities.
          </p>

          <h3 className="text-xl font-semibold mb-2">🔹 How You Can Participate:</h3>
          <p className="mb-4">
            By contributing just 1,000 BDT, you can become a lifetime member and shareholder in this spiritual mission.
            Every contribution counts and helps us reach our goal of 810,000,000 BDT for the project.
          </p>

          <h3 className="text-xl font-semibold mb-2">🔹 Membership Benefits:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Certificate of appreciation.</li>
            <li>Regular updates on the project's progress.</li>
            <li>Recognition as a lifetime member of Quraner Fariwala.</li>
            <li>The spiritual satisfaction of contributing to a noble cause.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">🔹 Campaign Highlights:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Land Acquisition: Secure 12 kathas of land in Dhaka.</li>
            <li>Construction: Build an advanced printing press, research lab, and office building.</li>
            <li>Equipment: Install essential printing machinery and research equipment.</li>
            <li>Community Engagement: Foster a sense of community and faith by providing access to the Holy Quran.</li>
          </ul>

          <p className="mb-4">
            🌙 <strong>Special Ramadan Campaign:</strong> This exclusive campaign will run only during the holy month of
            Ramadan. Don't miss the chance to be part of this transformative journey.
          </p>

          <p className="mb-4">
            🤝 <strong>Join Us in Building a Legacy:</strong> Whether you are an individual or an organization, your
            participation is invaluable. Help us make a lasting impact on the lives of many by donating and spreading
            the word.
          </p>

          <p className="mb-4">
            👉 <strong>How to Contribute:</strong> Visit our website or contact us to learn more and make your donation.
          </p>

          <p className="mb-4">
            May Allah (SWT) bless you abundantly for your generosity and support. Together, let's empower Islamic
            education and spread the light of the Holy Quran.
          </p>

          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link href="/projects/al-quran-journey/quraner-fariwala/advance-printing/become-member">
                Become a Member
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

