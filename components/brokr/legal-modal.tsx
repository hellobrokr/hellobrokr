"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface LegalModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LegalModal({ isOpen, onClose }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState("privacy") // 'privacy' or 'terms'

  if (!isOpen) return null

  const tabButtonClasses = (tabName: string) =>
    cn(
      "px-4 py-3 text-sm font-medium transition-colors duration-200 border-b-2",
      activeTab === tabName
        ? "border-primary text-foreground"
        : "border-transparent text-muted-foreground hover:text-foreground",
    )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-3xl rounded-2xl bg-white/95 p-6 sm:p-8 shadow-floating-pill backdrop-blur-md flex flex-col">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
          <div className="flex">
            <button onClick={() => setActiveTab("privacy")} className={tabButtonClasses("privacy")}>
              Privacy Policy
            </button>
            <button onClick={() => setActiveTab("terms")} className={tabButtonClasses("terms")}>
              Terms of Service
            </button>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-muted-foreground hover:bg-slate-100 hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="prose prose-sm max-w-none max-h-[70vh] overflow-y-auto pr-4 text-slate-600">
          {activeTab === "privacy" ? (
            <>
              <h2>Privacy Policy</h2>
              <p>
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p>
                brokr Technologies Inc. ("us", "we", or "our") operates the brokr website (the "Service"). This page
                informs you of our policies regarding the collection, use, and disclosure of personal data when you use
                our Service and the choices you have associated with that data.
              </p>
              <h3>Information Collection and Use</h3>
              <p>
                We collect several different types of information for various purposes to provide and improve our
                Service to you. This may include, but is not limited to, your email address, usage data, and cookies.
              </p>
              <h3>Use of Data</h3>
              <p>brokr Technologies Inc. uses the collected data for various purposes:</p>
              <ul>
                <li>To provide and maintain the Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer care and support</li>
                <li>To provide analysis or valuable information so that we can improve the Service</li>
                <li>To monitor the usage of the Service</li>
              </ul>
              <h3>Security of Data</h3>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the
                Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </>
          ) : (
            <>
              <h2>Terms of Service</h2>
              <p>
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p>
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the brokr
                website (the "Service") operated by brokr Technologies Inc. ("us", "we", or "our").
              </p>
              <p>
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these
                Terms. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
              <h3>Accounts</h3>
              <p>
                When you create an account with us, you must provide us information that is accurate, complete, and
                current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
                termination of your account on our Service.
              </p>
              <h3>Intellectual Property</h3>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive
                property of brokr Technologies Inc. and its licensors.
              </p>
              <h3>Limitation of Liability</h3>
              <p>
                In no event shall brokr Technologies Inc., nor its directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special, consequential or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from your access to or use of or inability to access or use the Service.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
