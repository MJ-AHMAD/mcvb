import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-muted flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Thank You for Your Support</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-6">
            Your generous donation will make a significant impact. We appreciate your support for our noble cause.
          </p>
          <div className="text-center">
            <Button asChild>
              <Link href="/projects/al-quran-journey/quraner-fariwala/quran-distribution">
                Back to Quran Distribution
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

