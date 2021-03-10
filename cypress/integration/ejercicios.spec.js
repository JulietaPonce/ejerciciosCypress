const { softAssert, softExpect } = chai;
const datosPage = require ("../pageObjects/datosPage");
const tiendaBuilder = require ('../builder/tiendaBuilder');

describe('Casos de prueba', ()=>{
    beforeEach(()=>{
        cy.visit('https://tienda.movistar.com.ar')
    })
    
    /*it('CP001 - Filtrar por marca - Marca.LG', ()=>{
        const Datospage = new datosPage();
        const TiendaBuilder = new tiendaBuilder().Marcacp001().build();
        Datospage.getfiltrarPor();
        Datospage.getfiltros().contains(TiendaBuilder.marca).click();
    })*/

    it('CP002 - Validar planes de TV - Perfil.Productos y servicios - Sección.Planes de TV - planes.=>3', () =>{
        const Datospage = new datosPage();
        const TiendaBuilder = new tiendaBuilder().Planescp002().build();
        //const urlbuilder = new tiendaBuilder().urlcp002().build();
        

        Datospage.getabrirMenuProductos();
        Datospage.getelegirMenuProductos().contains(TiendaBuilder.planes).click();
        
        /*cy.url().then((url) => {
            expect(url).to.includes(urlbuilder.url);
        });*/
        cy.url().then((url) => {
            expect(url).to.includes(Cypress.env('planes_url'));
        })
        

        cy.scrollTo(164.047,19);
           
        let listado = Datospage.nombreDePlan();
        cy.wrap(null).then(() =>{
            if(listado.length){
                cy.log('Hay mínimo 3 planes')
            }else{
                cy.log('Hay menos de 3 planes')
            }
        })
    })
    
    it('CP003- Validar menu en Negocio - Perfil.Negocio - Seccion.Menu superior', () =>{
        const Datospage = new datosPage();
        const TiendaBuilder = new tiendaBuilder().navegacionCP003().build();
        const menuesBuilder = new tiendaBuilder().menunegociolista().build();
        //const navegadorBuilder = new tiendaBuilder().menuNegocio().build();
        
        Datospage.getnavegacionHeader().contains(TiendaBuilder.negocio).click({force:true});
        cy.url().then((url) => {
            expect(url).to.includes(Cypress.env('negocio_url'));
        });

        /*Datospage.getarrayProductos().each(function($list){
            expect($list).not.includes(menuesBuilder.listamenu)
        })
        cy.wrap(null).then(() =>{
           Datospage.navegadorPrincipal().each(($list) => {
                expect($list).includes(navegadorBuilder.menu)
            }) 
        })*/

        Datospage.getarrayProductos().each(($list) => {
            expect($list).not.includes(menuesBuilder.listamenu)
        });
    });
})