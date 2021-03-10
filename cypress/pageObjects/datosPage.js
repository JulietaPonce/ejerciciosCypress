export default class datosPage{

    abrirFiltros = 'li > .btn-group > .btn-filter';
    grupoFiltro = '.group-filter-wrapper';
    menuProductos = 'div.dnavigation__link > .icon-chevron-down';
    verSubmenu = '.dnavigation__submenu';
    menuHeader= '.navigation-secondary';
    planesCard = '.box-azul.smaller.closed.mt40'; 
    listaProductos = '.dnavigation__submenu__2 li>a';
    nombrePlan= '.gb p';
    navegador = '.dnavigation span';

    constructor(){}

    getfiltrarPor(){ 
        return cy.get(this.abrirFiltros).click();
    }

    getfiltros(){ 
        return cy.get(this.grupoFiltro);
    }

    getabrirMenuProductos(){ 
        return cy.get(this.menuProductos).click();
    }

    getelegirMenuProductos(){ 
        return cy.get(this.verSubmenu);
    }

    getnavegacionHeader(){ 
        return cy.get(this.menuHeader);
    }

    getarrayPlanes(){ 
        return cy.get(this.planesCard);
    }

    getarrayProductos(){
        return cy.get(this.listaProductos);
    }

    nombreDePlan(){
        return cy.get(this.nombrePlan);
    }

    navegadorPrincipal(){
        return cy.get(this.navegador);
    }

    
}
