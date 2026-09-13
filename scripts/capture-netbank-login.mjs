import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('https://netbank-dashboard.netbank.workers.dev/login', {
  waitUntil: 'networkidle',
  timeout: 60000,
})
await page.waitForTimeout(1000)

await page.locator('input[type="password"]').fill('')
await page.locator('input').first().fill('')
await page.evaluate(() => {
  for (const el of document.querySelectorAll('input')) {
    el.value = ''
    el.setAttribute('value', '')
  }
})
await page.waitForTimeout(300)
await page.screenshot({
  path: 'public/previews/netbank-login.jpg',
  type: 'jpeg',
  quality: 82,
})

await page.setViewportSize({ width: 390, height: 844 })
await page.waitForTimeout(400)
await page.evaluate(() => {
  for (const el of document.querySelectorAll('input')) el.value = ''
})
await page.screenshot({
  path: 'public/previews/netbank-login-mobile.jpg',
  type: 'jpeg',
  quality: 82,
})

await browser.close()
console.log('ok')
