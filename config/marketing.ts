import { MarketingConfig } from 'types'

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Features',
      href: '/#features',
    },
    {
      title: 'Pricing',
      href: '/pricing',
    },
    {
      title: 'Use Cases',
      href: '/use-cases',
    },
    {
      title: 'Documentation',
      href: '/docs',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
  multiLevelNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Features',
      href: '/#features',
    },
    {
      title: 'Pricing',
      href: '/pricing',
    },
    {
      title: 'Use Cases',
      href: '/use-cases',
      subMenu: [
        {
          title: 'Government',
          href: '/use-cases/government',
        },
        {
          title: 'Education',
          href: '/use-cases/education',
        },
        {
          title: 'Professional Services',
          href: '/use-cases/professional',
        },
      ],
    },
    {
      title: 'Documentation',
      href: '/docs',
      subMenu: [
        {
          title: 'Getting Started',
          href: '/docs',
        },
        {
          title: 'API Reference',
          href: '/docs/api',
        },
        {
          title: 'Integration Guide',
          href: '/docs/integration',
        },
        {
          title: 'Best Practices',
          href: '/docs/best-practices',
        },
      ],
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
  footer: {
    links: [
      {
        href: '/pricing',
        name: 'Pricing',
      },
      {
        href: '/legal/privacy-policy',
        name: 'Privacy Policy',
      },
      {
        href: '/legal/cookies-policy',
        name: 'Cookies Policy',
      },
      {
        href: '/legal/terms-of-service',
        name: 'Terms of Service',
      },
    ],
  },
  postsPerPage: 6,
}
