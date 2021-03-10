class RangoPrecio2Page{
    constructor(){
        this.list = 'li > .btn-group > .btn-filter';
        this.rango2 =':nth-child(2) > .filter-group > .filter-data-section > :nth-child(3) > a > .filter-info-label';
    }
    filtros= () =>{
        cy.get(this.list).click()
        cy.get(this.rango2).click();
    }
}
export default new RangoPrecio2Page();