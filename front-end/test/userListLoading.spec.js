const chrome = require('chromedriver')
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('User List Loading', function() {
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
  it('User List Loading', async function() {
    await driver.get("http://localhost:3000/overview")
    await driver.manage().window().setRect(1229, 698)
    await driver.findElement(By.css(".MuiToolbar-root > .MuiButtonBase-root .MuiSvgIcon-root")).click()
    {
      const element = await driver.findElement(By.css(".MuiListItem-root:nth-child(2) .MuiButton-label"))
      await driver.actions({ bridge: true }).move(element).perform()
    }
    await driver.findElement(By.css(".MuiListItem-root:nth-child(2) .MuiButton-label")).click()
    assert(await driver.findElement(By.css(".MuiTableCell-head:nth-child(1)")).getText() == "User Name")
    assert(await driver.findElement(By.css(".MuiTableCell-head:nth-child(2)")).getText() == "Total Amount")
    assert(await driver.findElement(By.css(".MuiTableCell-head:nth-child(3)")).getText() == "Actions")
    {
      const elements = await driver.findElements(By.css(".MuiTypography-gutterBottom"))
      assert(elements.length)
    }
  })
})
