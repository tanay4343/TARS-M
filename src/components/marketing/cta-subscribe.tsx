'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button-ui'

import { BlockTitle } from '@/components/layout/main-title'

import { toast } from 'sonner'

interface LoadingState {
  message: string
  result: boolean
}

const initialLoadingValues: LoadingState = {
  message: '',
  result: false,
}

export default function CtaSubscribe() {
  const [loading, setLoading] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [returnValues, setReturnValues] =
    useState<LoadingState>(initialLoadingValues)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData()
    data.set('email', email)
    data.set('userGroup', 'Newsletter')
    data.set('source', 'CtaSubscribe')

    setLoading(true)

    try {
      const res = await fetch('/api/marketing/create-contact-loopso', {
        method: 'POST',
        body: data,
      })

      if (!res.ok) throw res

      const json = await res.json()

      const dataSuccess = json.data.success

      if (!dataSuccess) {
        setReturnValues({
          message: json.data.message,
          result: false,
        })
        toast.warning('You are already on the list.')

        return
      }

      setReturnValues({
        message: 'Your email has been added.',
        result: true,
      })
      toast.success(
        'Thanks! You have successfully added your email to the list.'
      )

      setEmail('')
    } catch (error: any) {
      console.error(error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="dark:bg-opacity/50 w-full bg-gray-50 py-12 dark:bg-slate-900 dark:text-white md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto max-w-3xl">
        <BlockTitle.Wrapper className="mb-10">
          <BlockTitle.Header elementType="p">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-6 size-14 text-blue-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </BlockTitle.Header>

          <BlockTitle.Title elementType="h2">
            Ready to Transform Your Documents?
          </BlockTitle.Title>

          <BlockTitle.Description>
            Join leading institutions that are already using TARS AI to digitize
            their archives and make information accessible. Get early access to
            new features and exclusive insights.
          </BlockTitle.Description>
        </BlockTitle.Wrapper>
        <div className="mt-6">
          <form
            method="POST"
            onSubmit={(e) => {
              e.preventDefault()
              onSubmit(e).catch((err) => console.error({ err }))
            }}
            className="items-center justify-center sm:flex"
          >
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your organization email"
              className="w-full rounded-md border p-3 outline-none focus:border-blue-600"
              required
            />
            <Button
              disabled={loading}
              loading={loading}
              type="submit"
              className="mt-3 w-full rounded-md bg-blue-600 px-5 py-3 text-white shadow-md outline-none ring-blue-600 ring-offset-2 duration-150 hover:bg-blue-500 focus:shadow-none focus:ring-2 active:bg-blue-700 sm:ml-3 sm:mt-0 sm:w-auto"
            >
              Get Early Access
            </Button>
          </form>
          {returnValues.message && (
            <p
              className={
                `mt-3 text-balance pl-3 text-xs ` +
                (returnValues.result ? 'text-green-400' : 'text-rose-600')
              }
            >
              {returnValues.message}
            </p>
          )}
          <p className="mx-auto mt-3 text-center text-[15px]">
            No spam ever, we care about the protection of your data. Read our{' '}
            <a className="text-blue-600 underline" href="/legal/privacy-policy">
              {' '}
              Privacy Policy{' '}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
