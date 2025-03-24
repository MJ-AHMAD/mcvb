"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function DonatePage() {
  const router = useRouter()
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [currency, setCurrency] = useState("GBP")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [contactMethod, setContactMethod] = useState("")
  const [contactTime, setContactTime] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Donation progress data (this would typically come from a database or API)
  const targetAmount = 79070
  const targetDate = new Date("2025-04-10")
  const currentAmount = 32550 // Example amount
  const donorCount = 1500 // Example count

  const daysRemaining = Math.ceil((targetDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24))
  const percentageReached = (currentAmount / targetAmount) * 100

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const donationAmount = amount === "custom" ? customAmount : amount

    try {
      const response = await fetch("/api/submit-donation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: donationAmount,
          currency,
          name,
          email,
          mobileNumber,
          paymentMethod,
          contactMethod,
          contactTime,
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Donation Successful",
          description: "Thank you for your generous donation!",
        })
        router.push("/projects/al-quran-journey/quraner-fariwala/quran-distribution/donate/thank-you")
      } else {
        throw new Error(data.message || "Failed to process donation")
      }
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: "Donation Failed",
        description: "There was an error processing your donation. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Support a Noble Cause</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Donation Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Target: {targetAmount.toLocaleString()} GBP</span>
              <span>Deadline: {targetDate.toLocaleDateString()}</span>
            </div>
            <Progress value={percentageReached} className="w-full" />
            <div className="flex justify-between text-sm">
              <span>{donorCount} Donors</span>
              <span>{currentAmount.toLocaleString()} GBP Raised</span>
              <span>{percentageReached.toFixed(2)}% of Goal</span>
            </div>
            <div className="text-center text-sm">
              <span>{daysRemaining} days remaining</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="currency">Select Currency 💵</Label>
          <Select value={currency} onValueChange={setCurrency}>
            <SelectTrigger id="currency" className="mt-1">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="GBP">GBP</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="BDT">BDT</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Select Donation Amount</Label>
          <RadioGroup value={amount} onValueChange={setAmount} className="grid grid-cols-3 gap-4 mt-2">
            {["10", "25", "50", "100", "250"].map((value) => (
              <div key={value} className="flex items-center">
                <RadioGroupItem value={value} id={`amount-${value}`} className="peer sr-only" />
                <Label
                  htmlFor={`amount-${value}`}
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  {currency} {value}
                </Label>
              </div>
            ))}
            <div className="flex items-center">
              <RadioGroupItem value="custom" id="amount-custom" className="peer sr-only" />
              <Label
                htmlFor="amount-custom"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                Custom
              </Label>
            </div>
          </RadioGroup>
        </div>

        {amount === "custom" && (
          <div>
            <Label htmlFor="custom-amount">Enter Custom Amount</Label>
            <Input
              id="custom-amount"
              type="number"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Enter amount"
              className="mt-1"
            />
          </div>
        )}

        <div>
          <Label>Payment Method</Label>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-2 gap-4 mt-2">
            {["card", "paypal", "bank", "mobile"].map((method) => (
              <div key={method} className="flex items-center">
                <RadioGroupItem value={method} id={`payment-${method}`} className="peer sr-only" />
                <Label
                  htmlFor={`payment-${method}`}
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  {method === "card" && "Credit/Debit Card"}
                  {method === "paypal" && "PayPal"}
                  {method === "bank" && "Bank Transfer"}
                  {method === "mobile" && "Mobile Banking"}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="mobile-number">Mobile Number</Label>
          <Input
            id="mobile-number"
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="contact-method">Preferred Contact Method</Label>
          <Select value={contactMethod} onValueChange={setContactMethod}>
            <SelectTrigger id="contact-method" className="mt-1">
              <SelectValue placeholder="Select preferred contact method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="phone">Direct Phone Call</SelectItem>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="whatsapp">WhatsApp</SelectItem>
              <SelectItem value="skype">Skype</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="contact-time">Preferred Contact Time</Label>
          <Select value={contactTime} onValueChange={setContactTime}>
            <SelectTrigger id="contact-time" className="mt-1">
              <SelectValue placeholder="Select preferred contact time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
              <SelectItem value="evening">Evening (5PM - 9PM)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : "Submit Donation"}
        </Button>
      </form>
    </div>
  )
}

