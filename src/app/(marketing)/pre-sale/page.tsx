import { productData } from '@/lib/fake-data/hero-parallax'
import { testimonialsData } from '@/lib/fake-data/testimonials'

import { HeroParallax } from '@/components/hero/hero-parallax'
import { BlockTitle } from '@/components/layout/main-title'
import CtaSocialMedia from '@/components/marketing/cta-social-media'
import CtaSubscribe from '@/components/marketing/cta-subscribe'
import FAQ from '@/components/marketing/faq'
import Features from '@/components/marketing/features'
import LatestFromBlog from '@/components/marketing/lastest-from-blog'
import PlansMarketing from '@/components/marketing/plans'
import Powered from '@/components/marketing/powered'
import TestimonialCards from '@/components/marketing/testimonials-cards'

export default async function IndexPage() {
  return (
    <>
      <HeroParallax products={productData} />
      <Features className="mb-36" />
      <section className="mb-36">
        <BlockTitle.Wrapper className="mb-36">
          <BlockTitle.Header elementType="h1">
            Card Pricing table
          </BlockTitle.Header>
          <BlockTitle.Title elementType="h2">
            One card for all your needs
          </BlockTitle.Title>
          <BlockTitle.Description>
            Pariatur laborum dolor ea commodo sit aute aliquip qui et cillum
            excepteur.
          </BlockTitle.Description>
          <BlockTitle.Background />
        </BlockTitle.Wrapper>
        <PlansMarketing />
      </section>
      <section className="mb-36">
        <BlockTitle.Wrapper className="mb-20">
          <BlockTitle.Header elementType="h1">Testimonial</BlockTitle.Header>
          <BlockTitle.Title elementType="h2">
            See what our customers are saying
          </BlockTitle.Title>
          <BlockTitle.Background />
        </BlockTitle.Wrapper>
        <TestimonialCards testimonials={testimonialsData} />
      </section>
      <Powered />
      <LatestFromBlog />
      <CtaSocialMedia />
      <section className="mx-auto flex w-full flex-col px-6 py-10 md:w-10/12 md:py-40 lg:max-w-4xl">
        <div className="container mx-auto text-center">
          <BlockTitle.Wrapper>
            <BlockTitle.Header elementType="h1">FAQ</BlockTitle.Header>

            <BlockTitle.Title elementType="h2">
              Freequently Asked Questions{' '}
            </BlockTitle.Title>

            <BlockTitle.Description>
              Explore our comprehensive FAQ to find quick answers to common
              inquiries. If you need further assistance, don&apos;t hesitate to
              contact us for personalized help.
            </BlockTitle.Description>

            <BlockTitle.Background />

            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <FAQ />
        </div>
      </section>

      <CtaSubscribe />
    </>
  )
}
