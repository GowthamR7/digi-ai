'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

export default function CompanyProfilePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: '',
    phoneNumber: '+91 9874563210',
    website: 'https://diginestai.com/',
    location: '',
    gstNumber: '27AACC1206D2Z5'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle company profile creation
    router.push('/dashboard')
  }

  const businessTypes = [
    'Technology',
    'E-commerce',
    'Healthcare',
    'Education',
    'Real Estate',
    'Retail',
    'Manufacturing',
    'Services',
    'Other'
  ]

  const indianStates = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create Your Company Profile
            </h1>
            <p className="text-gray-600">
              Set up your company by providing its name, contact number, and location to get started.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Company Name"
              type="text"
              placeholder="Enter Your Company Name"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              required
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Business Type
              </label>
              <select
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                required
              >
                <option value="">Select Category</option>
                {businessTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <Input
              label="Phone Number"
              type="tel"
              placeholder="+91 9874563210"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              required
            />

            <Input
              label="Website"
              type="url"
              placeholder="https://diginestai.com/"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Location
              </label>
              <select
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                required
              >
                <option value="">Select Your State</option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <Input
              label="GST Number"
              type="text"
              placeholder="27AACC1206D2Z5"
              value={formData.gstNumber}
              onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })}
              required
            />

            <Button type="submit" className="w-full flex items-center justify-center gap-2">
              Continue
              <ChevronRight size={20} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}