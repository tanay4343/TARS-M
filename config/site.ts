import { SiteConfig } from 'types'

import { absoluteUrl } from '@/lib/utils'

const defaultUrl = absoluteUrl('')

export const siteConfig: SiteConfig = {
  name: 'TARS AI',
  description:
    'TARS AI: Document Intelligence Platform - Turning Archives into Answers. Transform your documents into interactive knowledge bases with AI-powered chatbots.',
  shortDescription:
    'Document Intelligence Platform - Turning Archives into Answers',
  url: defaultUrl,
  mailSupport: 'contact@tarsai.com',
  address: 'India',
  ogImage: `${defaultUrl}/og.jpg`,
  social: {
    links: {
      twitter: {
        label: 'Twitter',
        icon: 'twitter',
        href: 'https://twitter.com/sojashivam',
      },
      github: {
        label: 'GitHub',
        icon: 'github',
        href: 'https://github.com/tarsai',
      },
      linkedin: {
        label: 'LinkedIn',
        icon: 'linkedin',
        href: 'https://linkedin.com/company/tarsai',
      },
      youtube: {
        label: 'YouTube',
        icon: 'youtube',
        href: 'https://youtube.com/@tarsai',
      },
      instagram: {
        label: 'Instagram',
        icon: 'instagram',
        href: 'https://instagram.com/tarsai',
      },
      facebook: {
        label: 'Facebook',
        icon: 'facebook',
        href: 'https://facebook.com/tarsai',
      },
      tiktok: {
        label: 'Tiktok',
        icon: 'tiktok',
        href: 'https://tiktok.com/@tarsai',
      },
    },
  },
}
