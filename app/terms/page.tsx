'use client'

import Link from 'next/link'
import TerminalWrapper from '@/components/TerminalWrapper'
import StatusBar from '@/components/StatusBar'
import CommandMode from '@/components/CommandMode'

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center p-5">
        <TerminalWrapper>
          <div className="p-8">
            <div className="text-[#a6e3a1] mb-6">
              <span className="text-[#89b4fa]">$</span> cat terms.md
            </div>

            <div className="text-[#cdd6f4] space-y-6">
              <h1 className="text-3xl text-[#fab387] mb-6">Terms and Conditions for SMS Services</h1>

              <p className="text-[#a6adc8]">
                By initiating a text message inquiry to our business number, you agree to the following Terms and Conditions:
              </p>

              <div className="space-y-5">
                <div className="bg-[#181825] p-4 border-l-2 border-[#89b4fa]">
                  <h2 className="text-[#89b4fa] text-lg mb-2">1. Program Description</h2>
                  <p className="text-sm text-[#a6adc8]">
                    Joshua Bergman provides automated and manual responses to real estate inquiries, including property
                    details, pricing, availability, and scheduling of showings.
                  </p>
                </div>

                <div className="bg-[#181825] p-4 border-l-2 border-[#89b4fa]">
                  <h2 className="text-[#89b4fa] text-lg mb-2">2. Message Frequency</h2>
                  <p className="text-sm text-[#a6adc8]">
                    Message frequency varies based on your inquiries. You will only receive messages in response to your
                    requests or regarding properties you have expressed interest in.
                  </p>
                </div>

                <div className="bg-[#181825] p-4 border-l-2 border-[#89b4fa]">
                  <h2 className="text-[#89b4fa] text-lg mb-2">3. Cost</h2>
                  <p className="text-sm text-[#a6adc8]">
                    Message and data rates may apply. Check with your mobile carrier for details. Joshua Bergman does not
                    charge a fee for this service.
                  </p>
                </div>

                <div className="bg-[#181825] p-4 border-l-2 border-[#89b4fa]">
                  <h2 className="text-[#89b4fa] text-lg mb-2">4. Opt-Out &amp; Support</h2>
                  <p className="text-sm text-[#a6adc8] mb-2">
                    <span className="text-[#cdd6f4] font-semibold">To Stop:</span> Reply{' '}
                    <span className="text-[#a6e3a1] font-bold">STOP</span> to any message to be permanently
                    unsubscribed. You will receive one final confirmation message.
                  </p>
                  <p className="text-sm text-[#a6adc8]">
                    <span className="text-[#cdd6f4] font-semibold">For Help:</span> Reply{' '}
                    <span className="text-[#a6e3a1] font-bold">HELP</span> for instructions or contact us at{' '}
                    <a href="mailto:gokick@bergman.rocks" className="text-[#89b4fa] hover:text-[#a6e3a1] transition-colors">
                      gokick@bergman.rocks
                    </a>.
                  </p>
                </div>

                <div className="bg-[#181825] p-4 border-l-2 border-[#f38ba8]">
                  <h2 className="text-[#f38ba8] text-lg mb-2">5. Disclaimer</h2>
                  <p className="text-sm text-[#a6adc8]">
                    Automated AI responses are for informational purposes. While we strive for accuracy, please verify
                    all property details with a licensed agent before making financial decisions.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex gap-6">
                <Link href="/" className="text-[#89b4fa] hover:text-[#a6e3a1] transition-colors">
                  ← Back to home
                </Link>
                <Link href="/policies" className="text-[#89b4fa] hover:text-[#a6e3a1] transition-colors">
                  ← Privacy Policy
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
