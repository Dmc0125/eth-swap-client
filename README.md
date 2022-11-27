# EVM swap client

- Executes swap via 1Inch aggregator

- This script currently does not handle any errors, so if transaction fails for any reason, it is not resent

## Config

- Enter following variables into .env file

```.env
RPC_URL=

WALLET_PRIVATE_KEY=Ethereum compatible wallet private key

FROM_TOKEN_AMOUNT_RAW=Raw amount of from token eg.: If from token is USDT and amount is 10, raw amount is 10000000 (USDT has 6 decimals)
FROM_TOKEN_ADDRESS=ERC20 token address eg.: (USDT on Arbitrum - 0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9)
TO_TOKEN_ADDRESS=ERC20 token address eg.: (wBTC on Arbitrum - 0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f)

```

## Run

Build
```sh
npm run build
```

Give the file execution permission
```sh
chmod +x dist/index.js
```

Run
```sh
./dist/index.js
```

## Cronjob command

```
m h d M DotW ~/<app-location>/dist/index.js >~/<app-location>/out.log 2>&1
```
