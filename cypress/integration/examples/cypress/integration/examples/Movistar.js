describe('Tests tienda Movistar', function(){
    beforeEach(function(){
        cy.visit('https://tienda.movistar.com.ar');
    })

    it('Caso 1', function(){
        //Bucar celular "A10S". Comprobar las 12 cuotas
        cy.get('.waves-effect.dnavigation__search-button.js-desktop-search-button').click();
        cy.get('#myInput').type('A10s').type('{enter}');
        let envio= 'Envío gratis'
        console.log(envio)
    });
    
    it('Caso 2', function(){
        //Aplicar filtros Gama alta y memoria 256GB
        //usar contains
        cy.get('li > .btn-group > .btn-filter').click();
        cy.get(':nth-child(4) > .filter-group > .filter-data-section > :nth-child(3) > a > .filter-info-label').click();
        cy.get('li > .btn-group > .btn-filter').click();
        cy.get(':nth-child(3) > .filter-group > .filter-data-section > :nth-child(2) > a > .filter-info-label').click();
        cy.get('#product-collection-image-1801').click();
        cy.get('#movistar-pdp-technical-specifications-desktop').trigger('mouseover').contains('256GB');

        let nombre = 'Franscisco';
        console.log(nombre)


    });

    it('Caso 3', function(){
        //Validar tercer equipo sin 60 cuotas
        cy.get('#product-collection-image-1659').click();
        cy.get('#open-modal-installments').click();
        cy.get('#selectBank').select('Credicoop');
        cy.get('#selectCardByBank').select('Visa');
        cy.get('#bodyTable').contains('6O');
    })
})
