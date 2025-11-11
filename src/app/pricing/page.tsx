import React from 'react'
import Link from 'next/link'
import { PricingCard } from '@/components/pricing/pricing-card'
import { PricingPlan } from '@/types/index'

const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: 1000,
    period: 'Month',
    description: 'Perfect for professionals getting started with WhatsApp Business',
    features: [
      {
        icon: 'phone',
        title: '1 Virtual Number',
        description: 'One verified WhatsApp business number'
      },
      {
        icon: 'tag',
        title: 'Business Branding',
        description: 'Custom logo + business name display'
      },
      {
        icon: 'send',
        title: 'Bulk Messaging',
        description: 'Unlimited marketing campaigns'
      }
    ]
  },
  {
    id: 'standard',
    name: 'Standard Plan',
    price: 1500,
    period: 'Month',
    description: 'Enhanced features with AI-powered conversations for growing teams',
    features: [
      {
        icon: 'phone',
        title: '2 Virtual Numbers',
        description: 'Two verified WhatsApp business numbers'
      },
      {
        icon: 'tag',
        title: 'Business Branding',
        description: 'Custom logo + business name display'
      },
      {
        icon: 'send',
        title: 'Bulk Messaging',
        description: 'Unlimited marketing campaigns'
      },
      {
        icon: 'bot',
        title: 'AI Lead Conversation Bot',
        description: 'Multi-language support & downloadable leads'
      }
    ]
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    price: 2500,
    period: 'Month',
    popular: true,
    description: 'Complete solution with advanced AI and multi-platform integration',
    features: [
      {
        icon: 'phone',
        title: '2 Virtual Numbers',
        description: 'Two verified WhatsApp business numbers'
      },
      {
        icon: 'tag',
        title: 'Business Branding',
        description: 'Custom logo + business name display'
      },
      {
        icon: 'send',
        title: 'Bulk Messaging',
        description: 'Unlimited marketing campaigns'
      },
      {
        icon: 'sparkles',
        title: 'Advanced AI Conversation Bot',
        description: 'Facebook, Instagram, Website chat integration'
      },
      {
        icon: 'bot',
        title: 'AI Lead Conversation Bot',
        description: 'Multi-language support & downloadable leads'
      },
      {
        icon: 'globe',
        title: 'Custom Website',
        description: 'Professional website (domain charges separate)'
      }
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    price: 0,
    period: 'Month',
    customizable: true,
    description: 'Digital marketing with AI tools, dual number setup, reels, and ad creatives.',
    features: [
      {
        icon: 'phone',
        title: 'Virtual Numbers',
        description: 'verified WhatsApp business numbers'
      },
      {
        icon: 'tag',
        title: 'Business Branding',
        description: 'Custom logo + business name display'
      },
      {
        icon: 'send',
        title: 'Bulk Messaging',
        description: 'Unlimited marketing campaigns'
      },
      {
        icon: 'sparkles',
        title: 'Advanced AI Conversation Bot',
        description: 'Facebook, Instagram, Website chat integration'
      },
      {
        icon: 'bot',
        title: 'AI Lead Conversation Bot',
        description: 'Multi-language support & downloadable leads'
      },
      {
        icon: 'globe',
        title: 'Custom Website',
        description: 'Professional website (domain charges separate)'
      }
    ]
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">DN</span>
            </div>
            <span className="font-bold text-xl">DIGI NEST AI</span>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/auth/login"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/auth/register"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Choose Your Plan
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Select the plan that best fits your business needs.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>© 2024 Diginest AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}