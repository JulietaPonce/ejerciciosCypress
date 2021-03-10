class searchingPage{
    constructor(){
        this.clickBotton = '.waves-effect.dnavigation__search-button.js-desktop-search-button';
        this.inputCellphone = '#myInput';
    }
    search = (element) =>{
        cy.get(this.clickBotton).click()
        cy.get(this.inputCellphone).type(element).type("{enter}");
    }
}
export default new searchingPage();