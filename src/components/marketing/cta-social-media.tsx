import React from 'react'

import Link from 'next/link'

import { siteConfig } from '@/config/site'

import { BlockTitle } from '@/components/layout/main-title'
import { Icons } from '@/components/shared/icons'

import { SocialLink } from '@/root/types'

export default function CtaSocialMedia() {
  const footerSocialLinks: SocialLink[] = Object.entries(
    siteConfig.social?.links ?? {}
  ).map(([key, value]) => ({
    ...value,
    icon: key as keyof typeof Icons,
  }))
  const filteredFooterSocialLinks = footerSocialLinks.filter(
    (link) =>
      link.icon === 'twitter' ||
      link.icon === 'github' ||
      link.icon === 'linkedin'
  )
  return (
    <div className="bg-slate-50 dark:bg-slate-800/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:px-8 lg:py-24">
        <div className="mr-10 lg:w-0 lg:flex-1">
          <BlockTitle.Header elementType="h1">
            Join the TARS AI Community
          </BlockTitle.Header>
          <p
            className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl"
            id="tars-ai-growing"
          >
            Transforming document intelligence together!
          </p>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">
            Connect with us to stay updated on AI advancements, document
            digitization success stories, and exclusive insights into the future
            of knowledge management.
          </p>
        </div>
        <div className="mt-8 lg:ml-8 lg:mt-0">
          <div className="mt-4 space-x-12">
            {filteredFooterSocialLinks.map((link, id) => (
              <Link
                href={link.href}
                target="_blank"
                className="inline-flex cursor-pointer p-2"
                key={id}
              >
                <span className="sr-only">{link.label}</span>
                {React.createElement(Icons[link.icon || 'plus'], {
                  height: 50,
                  width: 50,
                  className: 'text-gray-600 dark:text-gray-400 ',
                  'aria-hidden': 'true',
                })}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
