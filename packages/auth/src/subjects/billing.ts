import { z } from 'zod'

export const billingSubject = z.tuple([
  z.union([z.literal('manage'), z.literal('export'), z.literal('get')]),
  z.literal('billing'),
])

export type billingSubject = z.infer<typeof billingSubject>
