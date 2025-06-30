import React from 'react'

import { Button } from '@/components/ui/button'

import { Icons } from '@/components/shared/icons'

type PlanProps = {
  name: string
  description: string
  price: string
  features: string[]
  highlighted?: boolean
  index: number
}

const Plan: React.FC<PlanProps> = ({
  name,
  description,
  price,
  features,
  highlighted,
  index,
}) => (
  <div
    className={`relative flex w-full flex-col divide-y divide-gray-200 self-stretch rounded-xl bg-white shadow dark:divide-gray-800 dark:bg-gray-900 ${
      highlighted
        ? 'ring-2 ring-gray-900 dark:ring-white lg:z-10 lg:scale-110'
        : 'ring-1 ring-gray-200 dark:ring-gray-800'
    }`}
  >
    {index === 1 && (
      <div className="absolute inset-x-0 mx-auto -mt-4 text-center">
        <div className="inline-flex items-center rounded-full bg-blue-700 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-slate-950/5">
          Most Popular
        </div>
      </div>
    )}
    <div className="flex flex-1 flex-col gap-y-6 rounded-xl p-8 sm:p-6 xl:p-10">
      <h3 className="truncate text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
        {name}
      </h3>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
        {description}
      </p>
      <p className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-4xl">
        {price}
      </p>
      <ul className="order-last flex-1 space-y-3 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-x-3 text-left">
            <Icons.add height={12} width={12} />
            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant={index === 1 ? 'default' : 'outline'} className="w-full">
        Get Started
      </Button>
    </div>
  </div>
)

export default function PlansMarketing() {
  const plans = [
    {
      name: 'Education',
      description: 'Perfect for schools, colleges, and universities.',
      price: '₹50K - ₹2L',
      features: [
        'Unlimited document uploads',
        '12+ Indian language support',
        'AI-powered Q&A interface',
        'Source citations',
        'Student access management',
        'Basic analytics & reporting',
        'Email support',
      ],
    },
    {
      name: 'Professional',
      description: 'Ideal for law firms, healthcare, and engineering firms.',
      price: '₹1K - ₹5K/user',
      features: [
        'All Education features',
        'Advanced document processing',
        'Cross-document synthesis',
        'Custom knowledge base',
        'API access',
        'Priority support',
        'Training & implementation',
        'Dedicated account manager',
      ],
      highlighted: true,
    },
    {
      name: 'Government',
      description: 'Enterprise solution for ministries and departments.',
      price: '₹5L - ₹20L',
      features: [
        'All Professional features',
        'Custom AI model training',
        'On-premise deployment option',
        'Advanced security compliance',
        '24/7 dedicated support',
        'Custom integrations',
        'Comprehensive training',
        'SLA guarantees',
      ],
    },
  ]

  return (
    <div className="container px-4 md:px-6">
      <div className="grid items-center gap-16 px-4 sm:gap-y-24 sm:px-6 lg:px-8">
        <div className="-mt-14 flex w-full flex-col items-center gap-8 py-16 lg:grid lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Plan key={index} {...plan} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
