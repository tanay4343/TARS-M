import Image from 'next/image'

import { siteConfig } from '@/config/site'

interface IconLogoProps {
  className?: string
}

export default function IconLogo({ className }: IconLogoProps) {
  return (
    <Image
      src="/images/tarsai-logo.png"
      width={20}
      height={28}
      className={className}
      alt={`TARS AI Logo`}
      priority
    />
  )
}
