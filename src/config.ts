import { z } from 'zod'
import dotenv from 'dotenv'

dotenv.config()

const dotenvSchema = z.object({
  RPC_URL: z.string().min(1),

  WALLET_PRIVATE_KEY: z.string().min(1),
  FROM_TOKEN_AMOUNT_RAW: z.string().min(1),
  FROM_TOKEN_ADDRESS: z.string().min(1),
  TO_TOKEN_ADDRESS: z.string().min(1),
})

const res = dotenvSchema.parse(process.env)

export const { RPC_URL, WALLET_PRIVATE_KEY, FROM_TOKEN_ADDRESS, FROM_TOKEN_AMOUNT_RAW, TO_TOKEN_ADDRESS } = res
