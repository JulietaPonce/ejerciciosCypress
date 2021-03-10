class FiltroPage{
    constructor(){
        this.list = '.box-filter.box-select';
    }
    filtros= (elemento) =>{
        cy.get(this.list).click().get(elemento).click();
        
    }
}
export default new FiltroPage();