const chrome = require('chromedriver')
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Overview Loading', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Overview Loading', async function() {
    await driver.get("http://localhost:3000/overview")
    await driver.manage().window().setRect(1229, 698)
    await driver.findElement(By.css(".MuiTablePagination-toolbar")).click()
    assert(await driver.findElement(By.css(".MuiTypography-root:nth-child(4)")).getText() == "1-5 of 5")
    assert(await driver.findElement(By.css(".MuiTypography-gutterBottom")).getText() == "5 Records found. Page 1 of 1")
    assert(await driver.findElement(By.css(".MuiGrid-root:nth-child(1) > .makeStyles-overline-45")).getText() == "TOTAL SALES")
    {
      const elements = await driver.findElements(By.css(".MuiGrid-root:nth-child(1) > .MuiTypography-h2"))
      assert(elements.length)
    }
    assert(await driver.findElement(By.css(".MuiGrid-root:nth-child(2) > .makeStyles-overline-45")).getText() == "TOTAL PRODUCTS")
    {
      const elements = await driver.findElements(By.css(".MuiGrid-root:nth-child(2) > .MuiTypography-h2"))
      assert(elements.length)
    }
    assert(await driver.findElement(By.css(".MuiGrid-root:nth-child(3) > .makeStyles-overline-45")).getText() == "TOTAL USERS")
    {
      const elements = await driver.findElements(By.css(".MuiGrid-root:nth-child(3) > .MuiTypography-h2"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.css(".MuiTableCell-head:nth-child(1)"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.css(".MuiTableCell-head:nth-child(2)"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.css(".MuiTableCell-head:nth-child(3)"))
      assert(elements.length)
    }
  })
})
