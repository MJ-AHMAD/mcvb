import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdvancePrintingPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Advanced Printing Press and Research Facility</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Project Plan for Quraner Fariwala's Facility in Dhaka</CardTitle>
          <CardDescription>
            Establishing an advanced printing press, research facility, and a permanent office
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold mb-2">Objective:</h3>
          <p className="mb-4">
            To establish an advanced printing press, research facility, and a permanent office for Quraner Fariwala in
            Dhaka. This facility will support all operations including printing, research, and distribution of the Holy
            Quran.
          </p>

          <h3 className="text-xl font-semibold mb-2">Scope:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Acquire 12 kathas of land in Dhaka.</li>
            <li>Construct an advanced printing press, research lab, and office building.</li>
            <li>Equip the facility with necessary machinery and technology.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Structure:</h3>
          <p className="mb-4">
            This project will be financed through a non-profit shareholding system, where contributors become lifetime
            members and shareholders of the spiritual mission of Quraner Fariwala.
          </p>

          <h3 className="text-xl font-semibold mb-2">Membership Benefits:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Recognition: Shareholders will be acknowledged as lifetime members of Quraner Fariwala.</li>
            <li>Transparency: Regular updates on the progress of the project and its impact.</li>
            <li>
              Spiritual Satisfaction: Contributing to the widespread dissemination of the Holy Quran and Islamic
              education.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Share System Campaign</CardTitle>
          <CardDescription>
            Participate and contribute to the establishment of Quraner Fariwala's advanced facility
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold mb-2">Objective:</h3>
          <p className="mb-4">
            To allow everyone, regardless of their financial situation, to participate and contribute to the
            establishment of Quraner Fariwala's advanced facility by breaking down the total project cost into smaller,
            more manageable shares.
          </p>

          <h3 className="text-xl font-semibold mb-2">Share Structure:</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Share Type</th>
                  <th className="border px-4 py-2">Contribution Amount (BDT)</th>
                  <th className="border px-4 py-2">Number of Shares</th>
                  <th className="border px-4 py-2">Total Amount (BDT)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Diamond Shareholder</td>
                  <td className="border px-4 py-2">1,000,000</td>
                  <td className="border px-4 py-2">100</td>
                  <td className="border px-4 py-2">100,000,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Platinum Shareholder</td>
                  <td className="border px-4 py-2">500,000</td>
                  <td className="border px-4 py-2">200</td>
                  <td className="border px-4 py-2">100,000,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Gold Shareholder</td>
                  <td className="border px-4 py-2">250,000</td>
                  <td className="border px-4 py-2">400</td>
                  <td className="border px-4 py-2">100,000,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Silver Shareholder</td>
                  <td className="border px-4 py-2">100,000</td>
                  <td className="border px-4 py-2">500</td>
                  <td className="border px-4 py-2">50,000,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Bronze Shareholder</td>
                  <td className="border px-4 py-2">50,000</td>
                  <td className="border px-4 py-2">1000</td>
                  <td className="border px-4 py-2">50,000,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Community Shareholder</td>
                  <td className="border px-4 py-2">10,000</td>
                  <td className="border px-4 py-2">2000</td>
                  <td className="border px-4 py-2">20,000,000</td>
                </tr>
                <tr className="font-bold">
                  <td className="border px-4 py-2">Total</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2">4200</td>
                  <td className="border px-4 py-2">420,000,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-2">Fund Utilization:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Land Acquisition: 120,000,000 BDT</li>
            <li>Construction: 570,000,000 BDT</li>
            <li>Equipment: 100,000,000 BDT</li>
            <li>Operational: 20,000,000 BDT</li>
            <li>Grand Total: 810,000,000 BDT</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Membership Benefits:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Diamond Shareholder:</strong> Prominent recognition on the building's entrance, name and logo
              displayed on every printed Quran, regular updates and exclusive insights on the project's progress.
            </li>
            <li>
              <strong>Platinum Shareholder:</strong> Recognition within the facility, name and logo displayed on
              selected printed Qurans, regular updates on the project's progress.
            </li>
            <li>
              <strong>Gold Shareholder:</strong> Recognition within the facility, regular updates on the project's
              progress.
            </li>
            <li>
              <strong>Silver Shareholder:</strong> Name listed on a special acknowledgment board within the facility,
              regular updates on the project's progress.
            </li>
            <li>
              <strong>Bronze Shareholder:</strong> Certificate of appreciation, regular updates on the project's
              progress.
            </li>
            <li>
              <strong>Community Shareholder:</strong> Certificate of appreciation.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="text-center mb-8">
        <p className="text-lg mb-4">
          🤝 Join Us in Building a Legacy: Whether you are an individual or an organization, your participation is
          invaluable. Help us make a lasting impact on the lives of many by donating and spreading the word.
        </p>
        <p className="text-lg mb-4">
          May Allah (SWT) bless you abundantly for your generosity and support. Together, let's empower Islamic
          education and spread the light of the Holy Quran.
        </p>
      </div>

      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/projects/al-quran-journey/quraner-fariwala/advance-printing/action">Action now</Link>
        </Button>
      </div>
    </div>
  )
}

