import { cn } from '@/lib/utils'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type FAQProps = {
  className?: string
}

const pricingFaqData = [
  {
    id: 'item-1',
    question: 'What types of documents does TARS AI support?',
    answer:
      'TARS AI supports multiple document formats including PDFs, images, and videos. Our AI can process and extract information from scanned documents, handwritten text, and multimedia content.',
  },
  {
    id: 'item-2',
    question: 'How accurate are the AI-generated answers?',
    answer:
      'Our AI provides highly accurate answers with source citations. The system uses advanced NLP and semantic understanding to ensure responses are contextually relevant and properly attributed to source documents.',
  },
  {
    id: 'item-3',
    question: 'Which Indian languages are supported?',
    answer:
      'TARS AI currently supports 12+ Indian languages including Hindi, Bengali, Telugu, Marathi, Tamil, Gujarati, Kannada, Malayalam, Punjabi, Odia, Assamese, and Urdu. We are continuously expanding language support.',
  },
  {
    id: 'item-4',
    question: 'How secure is my document data?',
    answer:
      'We implement enterprise-grade security measures including end-to-end encryption, secure cloud storage, and compliance with government data protection standards. For government clients, we also offer on-premise deployment options.',
  },
  {
    id: 'item-5',
    question: 'What is the implementation timeline?',
    answer:
      'Implementation typically takes 2-4 weeks depending on the scope. We provide comprehensive training, setup assistance, and ongoing support to ensure smooth adoption of the platform.',
  },
  {
    id: 'item-6',
    question: 'Do you offer custom AI model training?',
    answer:
      'Yes, for government and enterprise clients, we offer custom AI model training tailored to specific document types, terminology, and organizational requirements. This ensures optimal accuracy for your unique use cases.',
  },
]

export default function FAQ({ className }: FAQProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn('w-full text-left ' + className)}
    >
      {pricingFaqData.map((faqItem) => (
        <AccordionItem key={faqItem.id} value={faqItem.id}>
          <AccordionTrigger>{faqItem.question}</AccordionTrigger>
          <AccordionContent>{faqItem.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
