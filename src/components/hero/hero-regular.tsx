import Link from 'next/link'

import { siteConfig } from '@/config/site'

import { cn } from '@/lib/utils'

import { AvatarsGroup } from '@/components/ui/avatar-group'
import { buttonVariants } from '@/components/ui/button'
import StarRating from '@/components/ui/star-rating'

import SparklesText from '@/components/magicui/sparkles-text'
import { Icons } from '@/components/shared/icons'

export default function HeroRegular() {
  const twitterLink = siteConfig.social?.links?.twitter

  return (
    <section>
      <section className="space-y-6 pb-12 pt-16 lg:py-28">
        <div className="container relative flex max-w-5xl flex-col items-center gap-5 text-center">
          <div className="my-6 flex items-center justify-center rounded bg-black">
            <div className="relative">
              <div className="absolute -inset-1 rounded bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-75 blur"></div>
              <Link
                href="/pricing"
                className="relative flex rounded bg-black px-7 py-4 font-semibold text-white"
              >
                <div className="flex items-center">
                  Try TARS AI <Icons.arrowRight className="ml-2 size-4" />
                </div>
              </Link>
            </div>
          </div>

          <h1
            className="my-6 animate-fade-up text-balance font-urban text-5xl font-extrabold tracking-tight opacity-0 sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
          >
            Turning Archives into <SparklesText text="Answers" />
          </h1>

          <p
            className="mb-8 max-w-4xl animate-fade-up text-balance text-lg leading-normal text-muted-foreground opacity-0 sm:text-lg sm:leading-8"
            style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
          >
            Transform static documents into interactive knowledge bases. Ask
            questions in natural language and get precise answers with source
            citations. Supporting 12+ Indian languages.
          </p>

          <div
            className="z-50 flex animate-fade-up justify-center space-x-2 opacity-0 md:space-x-4"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <Link
              href="/pricing"
              className={cn(buttonVariants({ size: 'lg' }))}
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'px-4'
              )}
            >
              <Icons.arrowRight className="mr-2 size-4" />
              <p>
                <span className="hidden sm:inline-block">Watch</span> Demo
              </p>
            </Link>
          </div>
          <div className="mb-6 mt-4 flex flex-col items-center justify-center gap-2 md:flex-row">
            <div className="flex flex-col items-center">
              <AvatarsGroup />
            </div>
            <div className="flex flex-col items-center gap-1 md:items-start">
              <StarRating />
              <p className="text-sm font-medium">
                Trusted by government institutions and educational organizations
              </p>
            </div>
          </div>
          <div className="mx-auto my-6 flex w-full justify-center">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icons.check className="size-4 text-green-500" />
                <span>PDF, Images, Videos</span>
              </div>
              <div className="flex items-center gap-2">
                <Icons.check className="size-4 text-green-500" />
                <span>12+ Languages</span>
              </div>
              <div className="flex items-center gap-2">
                <Icons.check className="size-4 text-green-500" />
                <span>Source Citations</span>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 top-[calc(100%-16rem)] mx-auto h-10 max-w-xs bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-indigo-600 to-purple-600 blur-[118px] dark:from-blue-400 dark:via-indigo-500 dark:to-purple-500"></div>
        </div>
      </section>
    </section>
  )
}
