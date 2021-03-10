class MemoriainternaP{
    constructor(){
        this.IrEspecificaciones ='#movistar-pdp-technical-specifications-desktop';
    }
    buscar= (elemento) =>{
        cy.get(this.IrEspecificaciones).click().trigger('mouseover').contains(elemento);
    }
}
export default new MemoriainternaP();