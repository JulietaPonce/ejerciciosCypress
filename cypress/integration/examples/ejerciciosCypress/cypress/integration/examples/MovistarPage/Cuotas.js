class verificarcuotasPage{
    constructor(){
        this.Button = '.button';
        this.docecuotas = '.price-installments';
    }
    verify = (cuotas) =>{
        cy.get(this.Button).click()
        cy.get(this.docecuotas).contains(cuotas);
    }
}
export default new verificarcuotasPage();