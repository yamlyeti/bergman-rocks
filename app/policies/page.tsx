'use client'

import Link from 'next/link'
import TerminalWrapper from '@/components/TerminalWrapper'
import StatusBar from '@/components/StatusBar'
import CommandMode from '@/components/CommandMode'

export default function PoliciesPage() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center p-5">
        <TerminalWrapper>
          <div className="p-8">
            <div className="text-[#a6e3a1] mb-6">
              <span className="text-[#89b4fa]">$</span> cat privacy-policy.md
            </div>

            <div className="text-[#cdd6f4] space-y-6">
              <h1 className="text-3xl text-[#fab387] mb-1">Privacy Policy for Joshua Bergman Real Estate AI</h1>
              <p className="text-[#6c7086] text-sm mb-6">Effective Date: March 4, 2026</p>

              <p className="text-[#a6adc8]">
                At Joshua Bergman, we respect your privacy. This Privacy Policy describes how we collect, use, and protect
                your personal information when you interact with our SMS-based real estate assistant.
              </p>

              <div className="space-y-5">
                <div className="bg-[#181825] p-4 border-l-2 border-[#89b4fa]">
                  <h2 className="text-[#89b4fa] text-lg mb-2">1. Information We Collect</h2>
                  <p className="text-sm text-[#a6adc8]">
                    We collect the phone number from which you send an inquiry and the content of your messages. We use
                    this information solely to provide property details, listing updates, and to facilitate communication
                    between you and our real estate team.
                  </p>
                </div>

                <div className="bg-[#181825] p-4 border-l-2 border-[#89b4fa]">
                  <h2 className="text-[#89b4fa] text-lg mb-2">2. No Sale of Data</h2>
                  <p className="text-sm text-[#a6adc8]">
                    We do not sell, rent, or share your phone number or personal data with third parties for marketing
                    purposes. Your information is used exclusively for the real estate services you have requested.
                  </p>
                </div>

                <div className="bg-[#181825] p-4 border-l-2 border-[#89b4fa]">
                  <h2 className="text-[#89b4fa] text-lg mb-2">3. Data Security</h2>
                  <p className="text-sm text-[#a6adc8]">
                    We implement industry-standard security measures to protect your information from unauthorized access
                    or disclosure.
                  </p>
                </div>

                <div className="bg-[#181825] p-4 border-l-2 border-[#89b4fa]">
                  <h2 className="text-[#89b4fa] text-lg mb-2">4. Your Choices</h2>
                  <p className="text-sm text-[#a6adc8]">
                    You can opt-out of receiving SMS messages at any time by replying{' '}
                    <span className="text-[#a6e3a1] font-bold">STOP</span>.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex gap-6">
                <Link href="/" className="text-[#89b4fa] hover:text-[#a6e3a1] transition-colors">
                  ← Back to home
                </Link>
                <Link href="/terms" className="text-[#89b4fa] hover:text-[#a6e3a1] transition-colors">
                  Terms &amp; Conditions →
                </Link>
              </div>
            </div>
          </div>
        </TerminalWrapper>
      </main>
      <StatusBar />
      <CommandMode />
    </>
  )
}
