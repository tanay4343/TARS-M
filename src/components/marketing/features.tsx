import { cn } from '@/lib/utils'

import { BlockTitle } from '@/components/layout/main-title'

export default function Features({ className }: { className?: string }) {
  return (
    <section className={cn(className) + ' w-full'}>
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-16 px-4 sm:gap-y-24 sm:px-6 lg:px-8">
          <BlockTitle.Wrapper>
            <BlockTitle.Header elementType="h2">Our Solution</BlockTitle.Header>

            <BlockTitle.Title elementType="h3">
              AI-Powered Document Intelligence
            </BlockTitle.Title>

            <BlockTitle.Description>
              Transform static documents into interactive knowledge bases with
              advanced AI capabilities.
            </BlockTitle.Description>

            <BlockTitle.Background />

            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <div className="mx-auto w-full max-w-full space-y-4">
            <div className="grid-row grid animate-fade-up gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <div className="rounded-full p-2">
                  <ChatIcon className="mb-2 size-6" />
                </div>
                <h2 className="text-xl font-bold">AI Chatbot Interface</h2>
                <p>
                  Ask questions in natural language and get precise answers with
                  source citations from your documents.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <div className="rounded-full p-2">
                  <UploadIcon className="mb-2 size-6" />
                </div>
                <h2 className="text-xl font-bold">Multi-Format Support</h2>
                <p>
                  Upload PDFs, images, and videos. Our AI processes all formats
                  to create comprehensive knowledge bases.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <div className="rounded-full p-2">
                  <LanguageIcon className="mb-2 size-6" />
                </div>
                <h2 className="text-xl font-bold">Multilingual Access</h2>
                <p>
                  Support for 12+ Indian languages ensures inclusive access to
                  knowledge across diverse populations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <div className="rounded-full p-2">
                  <SearchIcon className="mb-2 size-6" />
                </div>
                <h2 className="text-xl font-bold">Semantic Understanding</h2>
                <p>
                  Advanced NLP understands context and meaning, not just
                  keywords, for more accurate responses.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <div className="rounded-full p-2">
                  <LinkIcon className="mb-2 size-6 opacity-75" />
                </div>
                <h2 className="text-xl font-bold">Cross-Document Synthesis</h2>
                <p>
                  Connect information across multiple documents to provide
                  comprehensive answers and insights.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <div className="rounded-full p-2">
                  <ShieldIcon className="mb-2 size-6 opacity-75" />
                </div>
                <h2 className="text-xl font-bold">Source Citations</h2>
                <p>
                  Every answer includes precise citations, ensuring transparency
                  and credibility of information sources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChatIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7,10 12,15 17,10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function LanguageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function LinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.278 9-8 9s-8-4-8-9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}
