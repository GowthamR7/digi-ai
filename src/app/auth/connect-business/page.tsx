'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function ConnectBusinessPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    companyName: 'Neuronest AI',
    name: '',
    email: '',
    whatsappDisplayName: '',
    agreeDiginest: false,
    agreeMeta: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle business connection logic
    router.push('/onboarding/company-profile')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Form */}
        <div className="w-full max-w-md mx-auto lg:ml-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header with logos */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DN</span>
                </div>
                <span className="font-bold text-sm">DIGI NEST AI</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <span className="text-xs text-gray-600">Business Partner</span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-600 text-center">
                Diginest AI is an official tech provider of meta and has been given the right by
                Facebook and WhatsApp to Grant their Clients access to the WhatsApp businesses
                platform
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Connect Your Business
              </h2>
              <p className="text-sm text-gray-600">
                Redirect to Meta for manage your business communications seamlessly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Company Name"
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                required
              />

              <Input
                label="Name"
                type="text"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />

              <Input
                label="Email"
                type="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  WhatsApp Display Name
                  <span className="ml-1 text-gray-400 cursor-help" title="This name will appear in WhatsApp">ⓘ</span>
                </label>
                <Input
                  type="text"
                  placeholder="e.g., DiginestAI Support"
                  value={formData.whatsappDisplayName}
                  onChange={(e) => setFormData({ ...formData, whatsappDisplayName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="diginest"
                    checked={formData.agreeDiginest}
                    onChange={(e) => setFormData({ ...formData, agreeDiginest: e.target.checked })}
                    className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    required
                  />
                  <label htmlFor="diginest" className="text-sm text-gray-600">
                    Agree to{' '}
                    <span className="text-primary font-medium">Diginest AI</span>
                    {' '}Terms of Service & Privacy Policy.
                  </label>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="meta"
                    checked={formData.agreeMeta}
                    onChange={(e) => setFormData({ ...formData, agreeMeta: e.target.checked })}
                    className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    required
                  />
                  <label htmlFor="meta" className="text-sm text-gray-600">
                    Agree to{' '}
                    <span className="text-blue-600 font-medium">Meta</span>
                    {' '}Terms of Service & Privacy Policy.
                  </label>
                </div>
              </div>

              <Button type="submit" className="w-full">
                <span className="mr-2">⚡</span>
                Continue With Meta
              </Button>
            </form>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <svg viewBox="0 0 500 500" className="w-full h-auto">
              {/* Globe */}
              <circle cx="250" cy="250" r="120" fill="none" stroke="#E5E7EB" strokeWidth="2"/>
              <circle cx="250" cy="250" r="100" fill="none" stroke="#E5E7EB" strokeWidth="2"/>
              <ellipse cx="250" cy="250" rx="100" ry="30" fill="none" stroke="#E5E7EB" strokeWidth="2"/>
              <line x1="250" y1="130" x2="250" y2="370" stroke="#E5E7EB" strokeWidth="2"/>
              
              {/* People around globe */}
              <circle cx="150" cy="200" r="25" fill="#FCD34D"/>
              <rect x="138" y="225" width="24" height="40" rx="12" fill="#60A5FA"/>
              
              <circle cx="350" cy="200" r="25" fill="#FCD34D"/>
              <rect x="338" y="225" width="24" height="40" rx="12" fill="#34D399"/>
              
              <circle cx="200" cy="380" r="25" fill="#FCD34D"/>
              <rect x="188" y="405" width="24" height="40" rx="12" fill="#A78BFA"/>
              
              <circle cx="300" cy="380" r="25" fill="#FCD34D"/>
              <rect x="288" y="405" width="24" height="40" rx="12" fill="#F472B6"/>
              
              {/* Connection lines */}
              <line x1="175" y1="215" x2="230" y2="240" stroke="#22D3EE" strokeWidth="2" opacity="0.3"/>
              <line x1="325" y1="215" x2="270" y2="240" stroke="#22D3EE" strokeWidth="2" opacity="0.3"/>
              <line x1="220" y1="390" x2="250" y2="350" stroke="#22D3EE" strokeWidth="2" opacity="0.3"/>
              <line x1="280" y1="390" x2="250" y2="350" stroke="#22D3EE" strokeWidth="2" opacity="0.3"/>
            </svg>
            <div className="text-center mt-8">
              <p className="text-sm text-primary font-medium">-Powered By</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">NEURONEST AI</p>
              <p className="text-lg text-gray-700">PRIVATE LIMITED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}