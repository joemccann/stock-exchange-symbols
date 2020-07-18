# Stock Exchange Symbols

📈 Fetch and aggregate up to date lists of stocks on the NYSE, NASDAQ and AMEX.

## Usage

Fetch the files from Nasdaq.com first.

```sh
npm run fetch
```

This will download the latest CSV files for NYSE, Nasdaq and AMEX to the root
of `csv` directory.

Next, if you want to create a file of just the aggregated ticker symbols,
run:

```sh
npm run build -- all
```

To generate files for just an exchange run

```sh
npm run build -- nasdaq
npm run build -- nyse
npm run build -- amex
```

JSON files will be then written to the `json` directory.

## LICENSE

MIT

## Authors

- [Joe McCann](https://twitter.com/joemccann)
