const datosPage = require ('../cypress/integration/Ejercitacion/datosPage');
const tiendaBuilder = require ('../cypress/integration/Ejercitacion/tiendaBuilder');

describe('Casos de prueba', ()=>{
    beforeEach(()=>{
        cy.visit('https://tienda.movistar.com.ar')
    })
    it('CP001 - Filtrar por marca - Marca.LG', ()=>{
        datosPage.getfiltrarPor().type(tiendaBuilder.Marcacp001).click();
    })

})