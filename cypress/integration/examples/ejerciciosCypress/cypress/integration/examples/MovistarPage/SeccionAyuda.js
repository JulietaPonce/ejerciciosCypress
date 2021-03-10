class AyudaPage{
    constructor(){
        this.Iraayuda ='.dnavigation > :nth-child(3) > .dnavigation__link > span';
    }
    buscar= () =>{
        cy.get(this.Iraayuda).click();
    }
}
export default new AyudaPage();