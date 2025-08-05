"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ScrollAnimator } from "./scroll-animator"

const currencySymbols: { [key: string]: string } = {
  USD: "$",
  EUR: "€",
  GBP: "£",
}

export function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(10)
  const [currency, setCurrency] = useState("USD")
  const [estimatedSavings, setEstimatedSavings] = useState(0)
  const [paybackPeriod, setPaybackPeriod] = useState(0)

  useEffect(() => {
    // Example calculation logic
    const savingsPerUser = currency === "EUR" ? 450 : currency === "GBP" ? 400 : 500
    const totalSavings = teamSize * savingsPerUser * 12 // Annual savings
    const investmentCost = currency === "EUR" ? 1800 : currency === "GBP" ? 1600 : 2000 // Example annual cost of brokr Pro for 10 users

    setEstimatedSavings(totalSavings)
    if (totalSavings > 0) {
      setPaybackPeriod(Math.max(0.5, Math.round((investmentCost / totalSavings) * 12 * 10) / 10)) // in months
    } else {
      setPaybackPeriod(0)
    }
  }, [teamSize, currency])

  const currencySymbol = currencySymbols[currency] || "$"

  return (
    <ScrollAnimator>
      <div className="mt-12 rounded-2xl bg-white p-6 md:p-8 shadow-neumorphic-card transition-shadow duration-200 hover:shadow-neumorphic-card-hover">
        <h3 className="mb-6 text-center text-2xl font-semibold text-foreground">Calculate Your ROI</h3>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-6">
            <div>
              <Label htmlFor="team-size" className="mb-2 block text-sm font-medium text-foreground">
                Team Size: <span className="font-bold text-primary">{teamSize} users</span>
              </Label>
              <Slider
                id="team-size"
                min={1}
                max={100}
                step={1}
                value={[teamSize]}
                onValueChange={(value) => setTeamSize(value[0])}
                className="[&>span:first-child]:h-3 [&>span:first-child]:w-3 [&_[role=slider]]:bg-primary [&_[role=slider]]:shadow-md"
              />
            </div>
            <div>
              <Label htmlFor="currency" className="mb-2 block text-sm font-medium text-foreground">
                Currency
              </Label>
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger
                  id="currency"
                  className="w-full rounded-lg bg-white shadow-neumorphic-inset focus:ring-primary"
                >
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent className="bg-white shadow-neumorphic-card">
                  <SelectItem value="USD">USD ($)</SelectItem>
                  <SelectItem value="EUR">EUR (€)</SelectItem>
                  <SelectItem value="GBP">GBP (£)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-lime-50 p-6 text-center shadow-neumorphic-inset">
            <div>
              <p className="text-sm uppercase tracking-wider text-lime-700">Estimated Annual Savings</p>
              <p className="my-1 text-4xl font-bold text-primary md:text-5xl">
                {currencySymbol}
                {estimatedSavings.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm uppercase tracking-wider text-lime-700">Payback Period</p>
              <p className="my-1 text-2xl font-bold text-primary md:text-3xl">{paybackPeriod} months</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimator>
  )
}
