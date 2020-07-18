#! /usr/local/bin/node
const fs = require('fs')
const { resolve } = require('path')
const args = process.argv.slice(2)

const { aggregate, exchange: ex } = require('../')

const buildAggregateFile = async (filename = 'ALL') => {
  const { data } = await aggregate()

  await fs
    .writeFileSync(resolve(__dirname, `../json/${filename}.json`),
      JSON.stringify(data), 'utf-8')
}

const buildExchangeFile = async (
  exchange = 'nasdaq',
  filename = 'NASDAQ') => {
  const { data } = await ex(exchange)

  await fs
    .writeFileSync(resolve(__dirname, `../json/${filename}.json`),
      JSON.stringify(data), 'utf-8')
}

const run = async () => {
  if (args.find(arg => arg === 'all')) {
    try {
      await buildAggregateFile()
      console.info('✓ Built ALL.json file.')
    } catch (e) {
      console.error(e)
      process.exit(1)
    }
  }

  if (args.find(arg => arg === 'nasdaq')) {
    try {
      await buildExchangeFile('nasdaq', 'NASDAQ')
      console.info('✓ Built NASDAQ.json file.')
    } catch (e) {
      console.error(e)
      process.exit(1)
    }
  }

  if (args.find(arg => arg === 'amex')) {
    try {
      await buildExchangeFile('amex', 'AMEX')
      console.info('✓ Built AMEX.json file.')
    } catch (e) {
      console.error(e)
      process.exit(1)
    }
  }

  if (args.find(arg => arg === 'nyse')) {
    try {
      await buildExchangeFile('nyse', 'NYSE')
      console.info('✓ Built NYSE.json file.')
    } catch (e) {
      console.error(e)
      process.exit(1)
    }
  }

  process.exit(0)
}

run()
