const test = require('tape')

const { aggregate, exchange } = require('..')

test('sanity', t => {
  t.ok(true)
  t.end()
})

let nasLength = 0
let nyseLength = 0
let amexLength = 0

test('PASS: exchange - nasdaq', async t => {
  try {
    const { data } = await exchange('nasdaq')
    t.ok(data)
    nasLength = data.length
  } catch (e) {
    console.error(e)
  }
  t.end()
})

test('PASS: exchange - nasdaq', async t => {
  try {
    const { data } = await exchange('nyse')
    t.ok(data)
    nyseLength = data.length
  } catch (e) {
    console.error(e)
  }
  t.end()
})

test('PASS: exchange - nasdaq', async t => {
  try {
    const { data } = await exchange('amex')
    t.ok(data)
    amexLength = data.length
  } catch (e) {
    console.error(e)
  }
  t.end()
})

test('PASS: aggregate - default', async t => {
  try {
    const { data } = await aggregate()
    t.ok(data)
    t.equals(data.length, amexLength + nyseLength + nasLength)
  } catch (e) {
    console.error(e)
  }
  t.end()
})
