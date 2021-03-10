class AgregarP{
    constructor(){
        this.celular = '[class="button btn-cart"]';
        this.carrito ='.pdp-buttons-wrapper > #movistar-pdp-addtocart-button';
        this.home = '.home > a'
    }
    compra = (posicion) =>{
        cy.get(this.celular).eq(posicion).click()
        cy.get(this.carrito).click();
        cy.get(this.home).click();
    }
}
export default new AgregarP();