import { z } from 'zod'
import { organizationSchema } from '../models/organization'

export const organizationSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('create'),
    z.literal('delete'),
    z.literal('transfer_ownership'),
    z.literal('update'),
  ]),
  z.union([z.literal('organization'), organizationSchema]),
])

export type organizationSubject = z.infer<typeof organizationSubject>
