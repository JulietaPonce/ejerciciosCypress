class SeleccionarBancoPage{
    constructor(){
        this.Botonfinanciamiento = '#open-modal-installments';
        this.SeleccionarBanco = '#selectBank';
        this.SeleccionarTarjeta = '#selectCardByBank'
        this.Tablacuotas = '#installmentsTable'
    }
    Financia = (element1, element2, element3) =>{
        cy.get(this.Botonfinanciamiento).click()
        cy.get(this.SeleccionarBanco).select(element1);
        cy.get(this.SeleccionarTarjeta).select(element2);
        cy.get(this.Tablacuotas).contains(element3);
    }
}
export default new SeleccionarBancoPage();