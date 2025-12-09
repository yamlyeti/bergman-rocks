'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import TerminalWrapper from '@/components/TerminalWrapper'
import StatusBar from '@/components/StatusBar'
import CommandMode from '@/components/CommandMode'

export default function ResumePage() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center p-5">
        <TerminalWrapper>
          {/* Content */}
          <div className="p-8">
            <div className="text-[var(--text-secondary)] mb-6">
              <span className="text-[var(--accent)]">$</span> cat resume.md
            </div>

            <div className="text-[var(--text-primary)] space-y-8 font-mono text-sm md:text-base">
              {/* Header / Summary */}
              <div className="border-b border-[var(--border)] pb-6">
                <h1 className="text-3xl text-[var(--session-text)] mb-4 font-bold">Josh Bergman</h1>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Highly motivated professional with over 20 years experience in diverse and dynamic environments.
                  Proven ability to deliver high-quality results, meet deadlines and exceed expectations.
                  Skilled in advanced technology and application development. Strong team player and communicator,
                  with a demonstrated ability to collaborate effectively with colleagues.
                </p>
              </div>

              {/* Experience */}
              <section>
                <h2 className="text-xl text-[var(--accent)] mb-4 font-bold border-b border-[var(--border)] inline-block pr-4">
                  ## Experience
                </h2>

                <div className="space-y-8">
                  {/* Oddball */}
                  <div className="relative pl-4 border-l-2 border-[var(--border)]">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--accent)]" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">Oddball</h3>
                      <span className="text-[var(--text-secondary)] italic">Feb 2025 - Present</span>
                    </div>
                    <div className="text-[var(--session-text)] mb-2">DevOps Engineer II</div>
                    <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1">
                      <li>Maintaining and creating Automation for VA Flagship Mobile Application</li>
                      <li>Maintaining iOS and Android builds for Mobile Application</li>
                      <li>Tracking and monitoring alerts using DataDog</li>
                      <li>Building AWS infrastructure in GovCloud</li>
                    </ul>
                  </div>

                  {/* Apiture */}
                  <div className="relative pl-4 border-l-2 border-[var(--border)]">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--border)]" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">Apiture</h3>
                      <span className="text-[var(--text-secondary)] italic">Jul 2019 - Nov 2024</span>
                    </div>
                    <div className="text-[var(--session-text)] mb-2">Platform Engineer III</div>
                    <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1">
                      <li>Creating automation workflows to streamline processes and infrastructure as code with Terraform, CloudFormation, Jenkins and Bitbucket.</li>
                      <li>Proficient in multiple AWS technologies including: EC2 | Lambda | S3 | Route53 | CloudFormation| ECS | EKS | Secrets Manager | Parameter Store | Backup Service |RDS | Security Hub</li>
                      <li>Managed and maintained EC2 fleet which consisted of Windows, Linux and MacOS instances.</li>
                      <li>Managed Security vulnerabilities on instances and mitigated threats as necessary.</li>
                      <li>Engaged in the procurement, demonstration, and proof-of-concept processes for multiple Identity Provider (IDP) solutions, including JumpCloud, Fusion Auth, Ping, and Okta.</li>
                      <li>Managed the deployment of an Okta tenant to enable Enterprise SSO for applications and LDAP queries.</li>
                      <li>Designed and implemented a New Relic Framework using Infrastructure as Code (IaC) and automated deployments through pipeline webhooks.</li>
                    </ul>
                  </div>

                  {/* Schneider Electric */}
                  <div className="relative pl-4 border-l-2 border-[var(--border)]">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--border)]" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">Schneider Electric</h3>
                      <span className="text-[var(--text-secondary)] italic">Sep 2008 - Jul 2019</span>
                    </div>

                    <div className="mb-4">
                      <div className="text-[var(--session-text)] mb-1">Enterprise Devops Engineer <span className="text-xs text-[var(--text-secondary)]">(Mar 2017 - Jul 2019)</span></div>
                      <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1">
                        <li>Automating EC2 creation and working on CI/CD pipelines.</li>
                        <li>Automation of end to end application setups.</li>
                        <li>Managing and pushing code for automation to GitHub.</li>
                        <li>Created Jenkins pipelines to trigger builds on code commits.</li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <div className="text-[var(--session-text)] mb-1">Enterprise Cloud Engineer <span className="text-xs text-[var(--text-secondary)]">(Mar 2014 - Mar 2017)</span></div>
                      <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1">
                        <li>Setup Cloud Offer in AWS and provisioned infrastructure.</li>
                        <li>Was one of four that created the cloud provisioning setup for the Cloud Operations team.</li>
                        <li>Provisioned EC2 servers, classic load balancers.</li>
                        <li>Created and modified security groups.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="text-[var(--session-text)] mb-1">Global Systems Administrator <span className="text-xs text-[var(--text-secondary)]">(Sep 2008 - Mar 2014)</span></div>
                      <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1">
                        <li>In charge of technical support for the distribution centers servicing the RF units, printers, mobile carts, computers.</li>
                        <li>Traveled to all new distribution center locations, setup the equipment, trained local users.</li>
                        <li>Standardized all warehouse equipment globally for the Oracle distribution center offering.</li>
                        <li>Supported Oracle servers and shipping application.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Accomplishments */}
              <section>
                <h2 className="text-xl text-[var(--accent)] mb-4 font-bold border-b border-[var(--border)] inline-block pr-4">
                  ## Accomplishments
                </h2>
                <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
                  <li>Created and maintained release process for product offering adding automation and documentation around the process.</li>
                  <li>Collaborated on a team project during a company hackathon, achieving second place.</li>
                  <li>Provisioned event-driven platform for runbook automation to manage ec2 fleet in IaC.</li>
                  <li>Migrated entire Amazon Linux 2 instance fleet to Amazon Linux 2023 Operating System in IaC.</li>
                  <li>Migrated Windows Server 2012 Domain controllers to Windows Server 2022 in IaC.</li>
                  <li>Rebuilt entire Kerberos database and instances (4) from scratch and enabled synching in IaC.</li>
                </ul>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-xl text-[var(--accent)] mb-4 font-bold border-b border-[var(--border)] inline-block pr-4">
                  ## Education
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[var(--bg-secondary)] p-4 rounded border border-[var(--border)]">
                    <h3 className="font-bold text-[var(--text-primary)]">Central Penn College</h3>
                    <p className="text-[var(--text-secondary)]">Network Management and Ethical Hacking</p>
                    <p className="text-sm text-[var(--session-text)] mt-2">2010 - 2012</p>
                  </div>
                  <div className="bg-[var(--bg-secondary)] p-4 rounded border border-[var(--border)]">
                    <h3 className="font-bold text-[var(--text-primary)]">Bolingbrook High School</h3>
                    <p className="text-sm text-[var(--session-text)] mt-2">1995 - 1999</p>
                  </div>
                </div>
              </section>

              <div className="mt-8 pt-8 border-t border-[var(--border)]">
                <Link href="/" className="text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors">
                  ← Back to home
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
