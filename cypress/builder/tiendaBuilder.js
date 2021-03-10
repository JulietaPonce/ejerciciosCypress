export default class tiendaBuilder{
    constructor(){
    }

    build(){
        return this;
    }

    Marcacp001(){
        this.marca = 'LG';
        return this;
    }
    
    Planescp002(){
        this.planes = 'Planes de TV'
        return this;
    }

    urlcp002(){
        this.url = 'television/planes'
        return this;
    }

    navegacionCP003(){
        this.negocio = 'Negocios'
        return this;
    }

    menuNegocio(){
        this.menu = ['Tienda', 'Productos y Servicios', 'Ayuda', 'Beneficio']
        return this;
    }

    menunegociolista(){
        this.listamenu = ["Prepago", "Cambio de Plan", "Packs Postpago", "Servicios para tu línea"];
        return this;
    }

}