"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SimpleFooter } from "@/components/simple-footer"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CoxsBazarLuxuryRetreatPage() {
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
                Your Cox's Bazar Luxury Retreat booking request has been submitted successfully. We'll get back to you
                soon with confirmation details.
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
        <h1 className="text-4xl font-bold mb-8 text-center">Cox's Bazar Luxury Retreat</h1>
        <div className="max-w-4xl mx-auto">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Cox's Bazar luxury resort"
            width={800}
            height={400}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          <p className="text-center mb-8 text-lg">
            Immerse yourself in luxury with beachfront accommodations, spa treatments, and gourmet dining.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Package Details</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>5 days and 4 nights stay at a 5-star beachfront resort</li>
                <li>All-inclusive meals at gourmet restaurants</li>
                <li>Daily spa treatments</li>
                <li>Private beach access</li>
                <li>Sunset yacht cruise</li>
                <li>Private guided tour of Himchari National Park</li>
                <li>Candlelit beach dinner</li>
                <li>Round-trip luxury car transfer from Cox's Bazar Airport</li>
              </ul>
              <p className="mt-4 font-bold">Price: 75,000 BDT per person</p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Book Your Cox's Bazar Luxury Retreat Package</h2>
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
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Preferred Travel Date
              </label>
              <Input id="date" name="date" type="date" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                Number of Guests
              </label>
              <Input id="guests" name="guests" type="number" min="1" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Special Requests or Questions
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1"
                placeholder="Any special requests or questions?"
              />
            </div>
            <div>
              <Button type="submit" className="w-full">
                Book Now
              </Button>
            </div>
          </form>
        </div>
      </main>

      <SimpleFooter />
    </div>
  )
}

