import loginPage from "../pages/login.page"
import productsPage from "../pages/product.page"

describe('detailles product',{tags : "tc006" },  () => {
  context('success', ()=>{
    it('passes', () => {
      cy.visit('https://www.saucedemo.com/')
      loginPage.login("standard_user", "secret_sauce")
      productsPage.cliquerSurProduit("Sauce Labs Backpack")


    })
  })




})