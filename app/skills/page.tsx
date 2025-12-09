'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import StatusBar from '@/components/StatusBar'
import CommandMode from '@/components/CommandMode'

export default function SkillsPage() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center p-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-terminal-bg rounded-lg shadow-2xl overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[#c0c0c0] text-sm">yamlyeti@bergman.local:~/skills</div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-terminal-green mb-6">
            <span className="text-terminal-cyan">$</span> ls -la skills/
          </div>

          <div className="text-[#c0c0c0] space-y-8">
            <h1 className="text-3xl text-terminal-yellow mb-6">Technical Skills</h1>
            
            {/* Source Control */}
            <section>
              <h2 className="text-xl text-terminal-cyan mb-3 flex items-center gap-2">
                <span>📦</span> Source Control
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-4">
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">GitHub ⭐⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">BitBucket ⭐⭐⭐⭐⭐</div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-xl text-terminal-cyan mb-3 flex items-center gap-2">
                <span>💻</span> Languages
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-4">
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">YAML ⭐⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">HCL ⭐⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">Bash ⭐⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">CloudFormation ⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">Python ⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">Javascript ⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">Golang ⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">Typescript ⭐</div>
              </div>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-xl text-terminal-cyan mb-3 flex items-center gap-2">
                <span>🔒</span> Security
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-4">
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">Qualys ⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">Vulnerability Remediation ⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">CIS ⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">Kali Linux ⭐⭐</div>
              </div>
            </section>

            {/* Automation */}
            <section>
              <h2 className="text-xl text-terminal-cyan mb-3 flex items-center gap-2">
                <span>⚡</span> Automation
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-4">
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">Ansible ⭐⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">Terraform ⭐⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">StackStorm ⭐⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">Jenkins ⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">GitHub Actions ⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">Salt ⭐⭐⭐</div>
              </div>
            </section>

            {/* Monitoring */}
            <section>
              <h2 className="text-xl text-terminal-cyan mb-3 flex items-center gap-2">
                <span>📊</span> Monitoring
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-4">
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">Grafana ⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">New Relic ⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">DataDog ⭐⭐</div>
              </div>
            </section>

            {/* Operating Systems */}
            <section>
              <h2 className="text-xl text-terminal-cyan mb-3 flex items-center gap-2">
                <span>🖥️</span> Operating Systems
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-4">
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">Linux ⭐⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">MacOS ⭐⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">Windows ⭐⭐⭐⭐⭐</div>
              </div>
            </section>

            {/* AWS Cloud */}
            <section>
              <h2 className="text-xl text-terminal-cyan mb-3 flex items-center gap-2">
                <span>☁️</span> AWS Cloud
              </h2>
              <div className="space-y-3 ml-4">
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">
                  <div className="font-bold mb-1">EC2 ⭐⭐⭐⭐⭐</div>
                  <div className="text-xs text-[#808080] ml-2">Security Groups, Load Balancers, Target Groups</div>
                </div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">S3 ⭐⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">Lambda ⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">
                  <div className="font-bold mb-1">Secrets Manager ⭐⭐⭐⭐⭐</div>
                  <div className="text-xs text-[#808080] ml-2">Secrets, Replicas</div>
                </div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">
                  <div className="font-bold mb-1">SSM ⭐⭐⭐⭐⭐</div>
                  <div className="text-xs text-[#808080] ml-2">Parameter Store, Run Command, Documents</div>
                </div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">
                  <div className="font-bold mb-1">ECS ⭐⭐⭐⭐</div>
                  <div className="text-xs text-[#808080] ml-2">Clusters, Services, Tasks</div>
                </div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">
                  <div className="font-bold mb-1">Backup Service ⭐⭐⭐⭐⭐</div>
                  <div className="text-xs text-[#808080] ml-2">Vaults, Jobs, Cross Region</div>
                </div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">VPC ⭐⭐⭐⭐⭐</div>
              </div>
            </section>

            {/* AWS GovCloud */}
            <section>
              <h2 className="text-xl text-terminal-cyan mb-3 flex items-center gap-2">
                <span>🏛️</span> AWS GovCloud
              </h2>
              <div className="space-y-3 ml-4">
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">
                  <div className="font-bold mb-1">EC2 ⭐⭐⭐⭐⭐</div>
                  <div className="text-xs text-[#808080] ml-2">Security Groups, Load Balancers, Target Groups</div>
                </div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">S3 ⭐⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">Lambda ⭐⭐⭐⭐</div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">
                  <div className="font-bold mb-1">Secrets Manager ⭐⭐⭐⭐⭐</div>
                  <div className="text-xs text-[#808080] ml-2">Secrets, Replicas</div>
                </div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">
                  <div className="font-bold mb-1">SSM ⭐⭐⭐⭐⭐</div>
                  <div className="text-xs text-[#808080] ml-2">Parameter Store, Run Command, Documents</div>
                </div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">
                  <div className="font-bold mb-1">ECS ⭐⭐⭐⭐</div>
                  <div className="text-xs text-[#808080] ml-2">Clusters, Services, Tasks</div>
                </div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">
                  <div className="font-bold mb-1">Backup Service ⭐⭐⭐⭐⭐</div>
                  <div className="text-xs text-[#808080] ml-2">Vaults, Jobs, Cross Region</div>
                </div>
                <div className="bg-[#1a1a1a] p-3 border-l-2 border-terminal-green">VPC ⭐⭐⭐⭐⭐</div>
              </div>
            </section>

            <div className="mt-8 pt-6 border-t border-[#3a3a3a]">
              <Link href="/" className="text-terminal-cyan hover:text-terminal-green transition-colors">
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
    <StatusBar />
    <CommandMode />
    </>
  )
}
