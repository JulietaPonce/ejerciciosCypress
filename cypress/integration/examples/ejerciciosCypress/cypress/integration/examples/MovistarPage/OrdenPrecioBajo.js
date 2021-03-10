class BajoaAltoPage{
    constructor(){
        this.openlist = '#filter-search-bar > .toolbar > .sorter > .btn-group > #btn-sort > .visible-desk';
        this.selectorder ='#filter-search-bar > .toolbar > .sorter > .btn-group > .dropdown-menu > :nth-child(1) > a > span';
    }
    ordenar= (filtro) =>{
        cy.get(this.openlist).click()
        cy.get(this.selectorder).click();
    }
}
export default new BajoaAltoPage();