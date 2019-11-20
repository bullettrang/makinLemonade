import dotenv from 'dotenv'
dotenv.config()
describe('Header', () => {
  beforeAll(async () => {
    browser.on('disconnected', () => {
      browser.close()
    })
  })
  beforeEach(async () => {
    await jestPuppeteer.resetPage()
     await page.goto('http://localhost:3000')
  })

  it("Clicking about navigates to about", async () => {
    //   expect.assertions(2)
    //   await page.setRequestInterception(true)
    // page.on('request',async req=>{
    //     if(req.url().includes('http://localhost:3000/about')){
    //         console.log('here')
    //         await req.continue()
    //         const aboutHeading=  await page.$("#about-heading");
    //         await expect(aboutHeading).toMatch("About Us");
    //     }
    //   })
      await expect(page).toClick('#about')
      const aboutHeading = await page.waitForSelector("#about-heading");

     await expect(aboutHeading).toMatch("About Us")
  })

})