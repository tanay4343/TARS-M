import React, { useCallback } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteConfig } from '@/config/site'

import { cn } from '@/lib/utils'

import IconLogo from '@/components/shared/logo-icon'

interface MainNavProps {
  items?: any
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const currentPathname = usePathname()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  const closeMobileMenu = useCallback(() => {
    setShowMobileMenu(false)
  }, [])

  React.useEffect(() => {
    const closeMobileMenuOnClickOutside = (event: MouseEvent) => {
      if (
        event.target instanceof Element &&
        !event.target.closest('.mobile-nav') &&
        showMobileMenu
      ) {
        closeMobileMenu()
      }
    }

    document.addEventListener('click', closeMobileMenuOnClickOutside)

    return () => {
      document.removeEventListener('click', closeMobileMenuOnClickOutside)
    }
  }, [showMobileMenu, closeMobileMenu])

  const isActiveLink = (href: string) =>
    href === currentPathname ||
    (href !== '/' && currentPathname.startsWith(href))

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="items-center space-x-2 md:flex">
        <IconLogo />
        <span className="hidden font-sans text-2xl font-extrabold tracking-tight xl:inline-block">
          ARS
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 lg:flex">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                isActiveLink(item.href)
                  ? 'text-foreground'
                  : 'text-foreground/60',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
              onClick={closeMobileMenu}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  )
}
