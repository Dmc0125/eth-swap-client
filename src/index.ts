#! /usr/bin/env node

import Web3 from 'web3'
import fetch from 'node-fetch'

import { WALLET_PRIVATE_KEY, FROM_TOKEN_ADDRESS, TO_TOKEN_ADDRESS, FROM_TOKEN_AMOUNT_RAW } from './config.js'

type TxFetchResponse = {
  fromToken: TokenData;
  toToken: TokenData;
  toTokenAmount: string;
  fromTokenAmount: string;
  protocols: Array<Array<Protocol[]>>;
  tx: Transaction1Inch;
}

type TokenData = {
  symbol: string;
  name: string;
  decimals: number;
  address: string;
  logoURI: string;
  tags: string[];
}

type Protocol = {
  name: string;
  part: number;
  fromTokenAddress: string;
  toTokenAddress: string;
}

type Transaction1Inch = {
  from: string;
  to: string;
  data: string;
  value: string;
  gas: number;
  gasPrice: string;
}

const fetch1InchTransaction = async (fromAddress: string) => {
  const swapRoute = `https://api.1inch.io/v5.0/42161/swap`

  try {
    const params = new URLSearchParams({
      fromTokenAddress: FROM_TOKEN_ADDRESS,
      toTokenAddress: TO_TOKEN_ADDRESS,
      amount: FROM_TOKEN_AMOUNT_RAW,
      slippage: '1',
      fromAddress,
    })
    const res = await (await fetch(`${swapRoute}?${params.toString()}`)).json() as TxFetchResponse
    return res.tx
  } catch (error) {
    console.error(error)
    throw Error('Failed to fetch 1Inch transaction')
  }
}

const web3 = new Web3(process.env.RPC_URL as string)
const wallet = web3.eth.accounts.wallet.add(WALLET_PRIVATE_KEY)

const tx = await fetch1InchTransaction(wallet.address)
const txReceipt = await web3.eth.sendTransaction(tx)

console.log({ txReceipt })
console.info(
  'Executed transaction\n' +
  ` Input: ${FROM_TOKEN_ADDRESS}\n` +
  ` Output: ${TO_TOKEN_ADDRESS}\n` +
  ` Amount: ${FROM_TOKEN_AMOUNT_RAW}`,
)
