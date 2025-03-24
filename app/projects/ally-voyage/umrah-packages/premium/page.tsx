"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SimpleFooter } from "@/components/simple-footer"
import Link from "next/link"
import Image from "next/image"

export default function PremiumUmrahJourneyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-muted flex flex-col">
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
          </div>
        </header>

        <main className="container py-12 flex-grow flex flex-col items-center justify-center">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Thank You!</h2>
              <p className="mt-2 text-sm text-gray-600">
                Your Premium Umrah Journey booking request has been submitted successfully. We'll get back to you soon.
              </p>
            </div>
            <div className="mt-5">
              <Button asChild className="w-full">
                <Link href="/">Back to Home Page</Link>
              </Button>
            </div>
          </div>
        </main>

        <SimpleFooter />
      </div>
    )
  }

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
            <Link href="/projects/ally-voyage" className="font-medium hover:text-primary">
              Ally Voyage
            </Link>
            <Link href="/about" className="font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Premium Umrah Journey</h1>
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Package Details</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>14 days enhanced Umrah experience</li>
              <li>Premium 4-star hotel accommodations</li>
              <li>Smaller group size: 15-20 pilgrims</li>
              <li>Personalized spiritual guidance</li>
              <li>Comfortable transportation services</li>
              <li>Visit to historical Islamic sites</li>
            </ul>
            <p className="text-2xl font-bold">Price: $2500 per person</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Input id="name" name="name" type="text" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input id="email" name="email" type="email" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Input id="phone" name="phone" type="tel" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700">
                Passport Number
              </label>
              <Input id="passportNumber" name="passportNumber" type="text" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700">
                Preferred Travel Date
              </label>
              <Input id="travelDate" name="travelDate" type="date" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700">
                Number of Travelers
              </label>
              <Input id="groupSize" name="groupSize" type="number" min="1" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="accommodationPreference" className="block text-sm font-medium text-gray-700">
                Accommodation Preference
              </label>
              <Input
                id="accommodationPreference"
                name="accommodationPreference"
                type="text"
                className="mt-1"
                placeholder="e.g., King bed, Twin beds"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Additional Information or Special Requests
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1"
                placeholder="Please provide any additional information or special requests"
              />
            </div>
            <div>
              <Button type="submit" className="w-full">
                Submit Booking Request
              </Button>
            </div>
          </form>
        </div>
      </main>

      <SimpleFooter />
    </div>
  )
}

