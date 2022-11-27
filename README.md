# EVM swap client

- Executes swap via 1Inch aggregator

- This script currently does not handle any errors, so if transaction fails for any reason, it is not resent

## Config

- Enter following variables into [config.json](./config.json) file based on [config.sample](./config.sample)

```config.json
{
  "RPC_URL": string,

  "WALLET_PRIVATE_KEY": string,

  "FROM_TOKEN_AMOUNT_RAW": number,
  "FROM_TOKEN_ADDRESS": string,
  "TO_TOKEN_ADDRESS": string
}

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
