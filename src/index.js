const csv = require('async-csv')
const { resolve } = require('path')
const fs = require('fs')

const readCSV = async (filename) => {
  //
  // Read file from disk
  //
  const csvString = await fs
    .readFileSync(resolve(__dirname, `../csv/${filename}`), 'utf-8')

  //
  // Convert CSV string into rows
  //
  const rows = (await csv.parse(csvString))

  //
  // First row is "Symbol" so delete it.
  //
  delete rows[0]

  const symbols = []

  rows.forEach(row => {
    symbols.push((row[0]).trim())
  })

  return symbols
}

const aggregate = async () => {
  const nasdaqSymbols = await readCSV('NASDAQ.csv')
  const nyseSymbols = await readCSV('NYSE.csv')
  const amexSymbols = await readCSV('AMEX.csv')

  const data = (nasdaqSymbols.concat(nyseSymbols)).concat(amexSymbols)
  data.sort((a, b) => {
    if (a > b) return 1
    if (b > a) return 0
    return 0
  })
  return { data }
}

const exchange = async (exchange) => {
  if (exchange.toLowerCase() === 'nasdaq') {
    const data = await readCSV('NASDAQ.csv')
    data.sort((a, b) => {
      if (a > b) return 1
      if (b > a) return 0
      return 0
    })
    return { data }
  }

  if (exchange.toLowerCase() === 'nyse') {
    const data = await readCSV('NYSE.csv')
    data.sort((a, b) => {
      if (a > b) return 1
      if (b > a) return 0
      return 0
    })
    return { data }
  }

  if (exchange.toLowerCase() === 'amex') {
    const data = await readCSV('amex.csv')
    data.sort((a, b) => {
      if (a > b) return 1
      if (b > a) return 0
      return 0
    })
    return { data }
  }
}

module.exports = {
  aggregate,
  exchange
}
