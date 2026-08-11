'use client'

import Link from 'next/link'
import TerminalWrapper from '@/components/TerminalWrapper'
import StatusBar from '@/components/StatusBar'
import CommandMode from '@/components/CommandMode'

export default function SkillsPage() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center p-5">
        <TerminalWrapper>
          {/* Content */}
          <div className="p-8">
            <div className="text-[#a6e3a1] mb-6">
              <span className="text-[#89b4fa]">$</span> ls -la skills/
            </div>

            <div className="text-[#cdd6f4] space-y-8">
              <h1 className="text-3xl text-[#fab387] mb-6">Technical Skills</h1>

              {/* Source Control */}
              <section>
                <h2 className="text-xl text-[#89b4fa] mb-3 flex items-center gap-2">
                  <span>📦</span> Source Control
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-4">
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">GitHub ⭐⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">BitBucket ⭐⭐⭐⭐⭐</div>
                </div>
              </section>

              {/* Languages */}
              <section>
                <h2 className="text-xl text-[#89b4fa] mb-3 flex items-center gap-2">
                  <span>💻</span> Languages
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-4">
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">YAML ⭐⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">HCL ⭐⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">Bash ⭐⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">CloudFormation ⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">Python ⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">Javascript ⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">Golang ⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">Typescript ⭐</div>
                </div>
              </section>

              {/* Security */}
              <section>
                <h2 className="text-xl text-[#89b4fa] mb-3 flex items-center gap-2">
                  <span>🔒</span> Security
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-4">
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">Qualys ⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">Vulnerability Remediation ⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">CIS ⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">Kali Linux ⭐⭐</div>
                </div>
              </section>

              {/* Automation */}
              <section>
                <h2 className="text-xl text-[#89b4fa] mb-3 flex items-center gap-2">
                  <span>⚡</span> Automation
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-4">
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">Ansible ⭐⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">Terraform ⭐⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">StackStorm ⭐⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">Jenkins ⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">GitHub Actions ⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">Salt ⭐⭐⭐</div>
                </div>
              </section>

              {/* Monitoring */}
              <section>
                <h2 className="text-xl text-[#89b4fa] mb-3 flex items-center gap-2">
                  <span>📊</span> Monitoring
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-4">
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">Grafana ⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">New Relic ⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">DataDog ⭐⭐</div>
                </div>
              </section>

              {/* Operating Systems */}
              <section>
                <h2 className="text-xl text-[#89b4fa] mb-3 flex items-center gap-2">
                  <span>🖥️</span> Operating Systems
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-4">
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">Linux ⭐⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">MacOS ⭐⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">Windows ⭐⭐⭐⭐⭐</div>
                </div>
              </section>

              {/* AWS Cloud */}
              <section>
                <h2 className="text-xl text-[#89b4fa] mb-3 flex items-center gap-2">
                  <span>☁️</span> AWS Cloud
                </h2>
                <div className="space-y-3 ml-4">
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">
                    <div className="font-bold mb-1">EC2 ⭐⭐⭐⭐⭐</div>
                    <div className="text-xs text-[#808080] ml-2">Security Groups, Load Balancers, Target Groups</div>
                  </div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">S3 ⭐⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">Lambda ⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">
                    <div className="font-bold mb-1">Secrets Manager ⭐⭐⭐⭐⭐</div>
                    <div className="text-xs text-[#808080] ml-2">Secrets, Replicas</div>
                  </div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">
                    <div className="font-bold mb-1">SSM ⭐⭐⭐⭐⭐</div>
                    <div className="text-xs text-[#808080] ml-2">Parameter Store, Run Command, Documents</div>
                  </div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">
                    <div className="font-bold mb-1">ECS ⭐⭐⭐⭐</div>
                    <div className="text-xs text-[#808080] ml-2">Clusters, Services, Tasks</div>
                  </div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">
                    <div className="font-bold mb-1">Backup Service ⭐⭐⭐⭐⭐</div>
                    <div className="text-xs text-[#808080] ml-2">Vaults, Jobs, Cross Region</div>
                  </div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">VPC ⭐⭐⭐⭐⭐</div>
                </div>
              </section>

              {/* AWS GovCloud */}
              <section>
                <h2 className="text-xl text-[#89b4fa] mb-3 flex items-center gap-2">
                  <span>🏛️</span> AWS GovCloud
                </h2>
                <div className="space-y-3 ml-4">
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">
                    <div className="font-bold mb-1">EC2 ⭐⭐⭐⭐⭐</div>
                    <div className="text-xs text-[#808080] ml-2">Security Groups, Load Balancers, Target Groups</div>
                  </div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">S3 ⭐⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">Lambda ⭐⭐⭐⭐</div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">
                    <div className="font-bold mb-1">Secrets Manager ⭐⭐⭐⭐⭐</div>
                    <div className="text-xs text-[#808080] ml-2">Secrets, Replicas</div>
                  </div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">
                    <div className="font-bold mb-1">SSM ⭐⭐⭐⭐⭐</div>
                    <div className="text-xs text-[#808080] ml-2">Parameter Store, Run Command, Documents</div>
                  </div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">
                    <div className="font-bold mb-1">ECS ⭐⭐⭐⭐</div>
                    <div className="text-xs text-[#808080] ml-2">Clusters, Services, Tasks</div>
                  </div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">
                    <div className="font-bold mb-1">Backup Service ⭐⭐⭐⭐⭐</div>
                    <div className="text-xs text-[#808080] ml-2">Vaults, Jobs, Cross Region</div>
                  </div>
                  <div className="bg-[#181825] p-3 border-l-2 border-[#a6e3a1]">VPC ⭐⭐⭐⭐⭐</div>
                </div>
              </section>

              <div className="mt-8 pt-6 border-t border-[#313244]">
                <Link href="/" className="text-[#89b4fa] hover:text-[#a6e3a1] transition-colors">
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
