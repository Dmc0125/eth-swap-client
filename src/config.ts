import { z } from 'zod'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'

const __dirname = dirname(fileURLToPath(import.meta.url))
const configUTF8 = await fs.readFile(path.join(__dirname, '../config.json'), { encoding: 'utf-8' })
const config = JSON.parse(configUTF8)

const dotenvSchema = z.object({
	RPC_URL: z.string().min(1),

	WALLET_PRIVATE_KEY: z.string().min(1),
	FROM_TOKEN_AMOUNT_RAW: z.number().min(1),
	FROM_TOKEN_ADDRESS: z.string().min(1),
	TO_TOKEN_ADDRESS: z.string().min(1),
})

const res = dotenvSchema.parse(config)

export const {
	RPC_URL,
	WALLET_PRIVATE_KEY,
	FROM_TOKEN_ADDRESS,
	FROM_TOKEN_AMOUNT_RAW,
	TO_TOKEN_ADDRESS,
} = res
