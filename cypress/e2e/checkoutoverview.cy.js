/// <reference types="cypress" />
import CheckoutOverviewPage from "../pages/CheckoutOvervieuw.page";
import loginPage from "../pages/login.page";
import ProductsPage from "../pages/product.page";
import CartPage from "../pages/cart.page";
import CheckoutInformationPage from "../pages/checkoutinformationpage.page";
describe("Test dela page de paiement", () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com");
        loginPage.login("standard_user", "secret_sauce");
        ProductsPage.ajouterProduitAuPanier("sauce-labs-backpack");
        ProductsPage.allerAuPanier();
        CartPage.clickCheckoutButton();
        CheckoutInformationPage.completeCheckoutInformation("John", "Doe", "12345");
        cy.url().should("include", "/checkout-step-two.html"); 
    });

    it("Vérifier que le prix total est visible", () => {
        CheckoutOverviewPage.verifierleprix();
        cy.get(".summary_subtotal_label").should("exist");
        cy.get(".summary_total_label").should("exist");
    });

    it("Finaliser l'achat", () => {
        CheckoutOverviewPage.cliquersurleButtonfinish();
        cy.url().should("include", "/checkout-complete.html");
        cy.get(".complete-header").should("have.text", "Thank you for your order!");
    });

    it("Annuler l'achat", () => {
        CheckoutOverviewPage.cliquersurleButtoncancel();
        cy.url().should("include", "/inventory.html");
        cy.get(".title").should("have.text", "Products");
    });
});
