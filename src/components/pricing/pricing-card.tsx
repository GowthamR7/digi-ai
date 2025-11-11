import React from 'react'
import { Check } from 'lucide-react'
import { Card, CardBody } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PricingPlan } from '@/types'
import { formatCurrency } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  plan: PricingPlan
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <Card 
      highlighted={plan.popular}
      className={cn(
        'relative overflow-hidden transition-transform duration-300 hover:scale-105',
        plan.popular && 'ring-2 ring-primary'
      )}
    >
      {plan.popular && (
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white text-primary text-xs font-semibold rounded-full">
            Popular
          </span>
        </div>
      )}

      <CardBody className="p-8">
        <h3 className={cn(
          'text-2xl font-bold mb-2',
          plan.popular ? 'text-white' : 'text-gray-900'
        )}>
          {plan.name}
        </h3>
        
        <p className={cn(
          'text-sm mb-6',
          plan.popular ? 'text-white/90' : 'text-gray-600'
        )}>
          {plan.description}
        </p>

        {plan.customizable ? (
          <div className="mb-8">
            <div className="text-4xl font-bold text-gray-900">Customizable</div>
          </div>
        ) : (
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className={cn(
                'text-4xl font-bold',
                plan.popular ? 'text-white' : 'text-gray-900'
              )}>
                {formatCurrency(plan.price)}
              </span>
              <span className={cn(
                'text-base',
                plan.popular ? 'text-white/80' : 'text-gray-600'
              )}>
                / {plan.period}
              </span>
            </div>
            <p className={cn(
              'text-sm mt-1',
              plan.popular ? 'text-white/80' : 'text-gray-500'
            )}>
              +18% GST
            </p>
          </div>
        )}

        <div className="space-y-4 mb-8">
          <p className={cn(
            'text-sm font-semibold',
            plan.popular ? 'text-white' : 'text-gray-900'
          )}>
            Includes:
          </p>
          
          {plan.features.map((feature, index) => (
            <div key={index} className="flex gap-3">
              <div className={cn(
                'flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5',
                plan.popular ? 'bg-white/20' : 'bg-primary-50'
              )}>
                <Check 
                  size={14} 
                  className={plan.popular ? 'text-white' : 'text-primary'}
                />
              </div>
              <div className="flex-1">
                <p className={cn(
                  'text-sm font-medium',
                  plan.popular ? 'text-white' : 'text-gray-900'
                )}>
                  {feature.title}
                </p>
                <p className={cn(
                  'text-xs mt-0.5',
                  plan.popular ? 'text-white/80' : 'text-gray-600'
                )}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button
          variant={plan.popular ? 'secondary' : 'outline'}
          className="w-full"
        >
          {plan.customizable ? 'Contact Now' : 'Get Started'}
        </Button>
      </CardBody>
    </Card>
  )
}