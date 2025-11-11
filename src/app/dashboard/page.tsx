'use client'

import React from 'react'
import { Card, CardBody, CardHeader } from '@/components/ui/card'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { Search, Filter } from 'lucide-react'

const leadsData = [
  { week: 'Week 1', leads: 950, conversions: 350 },
  { week: 'Week 2', leads: 750, conversions: 550 },
  { week: 'Week 3', leads: 600, conversions: 600 },
  { week: 'Week 4', leads: 550, conversions: 400 }
]

const moneySpentData = [
  { week: 'Week 1', amount: 3800 },
  { week: 'Week 2', amount: 4200 },
  { week: 'Week 3', amount: 4800 },
  { week: 'Week 4', amount: 3500 }
]

export default function DashboardPage() {
    
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome to your Diginest workspace
        </h1>
        <p className="text-gray-600">
          Track your campaigns, monitor performance, and manage every bot — all from one place.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Ticket History */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Ticket History</h3>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Solved</span>
              <span className="text-2xl font-bold text-gray-900">000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">In Process</span>
              <span className="text-2xl font-bold text-gray-900">000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Unsolved</span>
              <span className="text-2xl font-bold text-gray-900">000</span>
            </div>
          </CardBody>
        </Card>

        {/* Appointment Overview */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Appointment Overview</h3>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Available Staff</p>
                <p className="text-2xl font-bold text-gray-900">000</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Appointments</p>
                <p className="text-2xl font-bold text-gray-900">000</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Completed</p>
                <p className="text-2xl font-bold text-gray-900">000</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Pending</p>
                <p className="text-2xl font-bold text-gray-900">000</p>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Chat Summary */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Chat Summary</h3>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Received</span>
              <span className="text-2xl font-bold text-gray-900">000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Read Messages</span>
              <span className="text-2xl font-bold text-gray-900">000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Unread Messages</span>
              <span className="text-2xl font-bold text-gray-900">000</span>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leads to Conversion */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Leads To Conversion</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">
                Over All
              </button>
              <button className="px-3 py-1 text-xs bg-primary text-white rounded-lg">
                This Month
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">
                This Week
              </button>
            </div>
          </CardHeader>
          <CardBody>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={leadsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="week" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="leads" 
                  stroke="#22B8CF" 
                  strokeWidth={2}
                  dot={{ fill: '#22B8CF', r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="conversions" 
                  stroke="#F59E0B" 
                  strokeWidth={2}
                  dot={{ fill: '#F59E0B', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>

        {/* Money Spent (Ads) */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Money Spent (Ads)</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">
                Over All
              </button>
              <button className="px-3 py-1 text-xs bg-primary text-white rounded-lg">
                This Month
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">
                This Week
              </button>
            </div>
          </CardHeader>
          <CardBody>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={moneySpentData}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22B8CF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#22B8CF" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="week" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#22B8CF" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorAmount)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      </div>

      {/* Transaction History */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Transaction History</h3>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter size={18} />
              Filter
            </button>
          </div>
        </CardHeader>
        <CardBody>
          <div className="text-center py-12 text-gray-500">
            No transactions yet
          </div>
        </CardBody>
      </Card>
    </div>
  )
}