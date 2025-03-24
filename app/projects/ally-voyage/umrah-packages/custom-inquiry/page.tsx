"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SimpleFooter } from "@/components/simple-footer"
import Link from "next/link"
import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CustomUmrahInquiryPage() {
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
                Your custom Umrah package inquiry has been submitted successfully. We'll get back to you soon with a
                tailored proposal.
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
        <h1 className="text-4xl font-bold mb-8 text-center">Custom Umrah Package Inquiry</h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-center mb-8">
            Please provide us with your preferences and requirements, and we'll create a tailored Umrah package just for
            you.
          </p>
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
              <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700">
                Number of Travelers
              </label>
              <Input id="groupSize" name="groupSize" type="number" min="1" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="preferredDates" className="block text-sm font-medium text-gray-700">
                Preferred Travel Dates
              </label>
              <Input
                id="preferredDates"
                name="preferredDates"
                type="text"
                required
                className="mt-1"
                placeholder="e.g., 15 Oct 2023 - 30 Oct 2023"
              />
            </div>
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                Preferred Duration (in days)
              </label>
              <Input id="duration" name="duration" type="number" min="5" required className="mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Accommodation Preference</label>
              <div className="space-y-2">
                {["3-star", "4-star", "5-star", "Luxury"].map((option) => (
                  <div key={option} className="flex items-center">
                    <Checkbox id={`accommodation-${option}`} />
                    <Label htmlFor={`accommodation-${option}`} className="ml-2">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Services</label>
              <div className="space-y-2">
                {["Guided Tours", "Transportation", "Meals", "Visa Assistance"].map((service) => (
                  <div key={service} className="flex items-center">
                    <Checkbox id={`service-${service}`} />
                    <Label htmlFor={`service-${service}`} className="ml-2">
                      {service}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                Estimated Budget per Person (in USD)
              </label>
              <Input id="budget" name="budget" type="number" min="1000" step="500" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700">
                Special Requirements or Preferences
              </label>
              <Textarea
                id="specialRequirements"
                name="specialRequirements"
                rows={4}
                className="mt-1"
                placeholder="Please provide any additional information, special requests, or preferences for your Umrah journey"
              />
            </div>
            <div>
              <Button type="submit" className="w-full">
                Submit Inquiry
              </Button>
            </div>
          </form>
        </div>
      </main>

      <SimpleFooter />
    </div>
  )
}

