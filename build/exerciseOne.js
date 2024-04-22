"use strict";
/*1. Definir una interfaz para representar un producto:
    a. La interfaz debe incluir propiedades para el nombre, el precio y la categoría
    del producto.
    b. Crear una clase que implemente la interfaz de producto.
    c. Instanciar un objeto de producto y asignarle valores a sus propiedades.*/
class ProductImplementation {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
const createProduct = new ProductImplementation("Coliflor", 2500, "Vegetal");
console.log(createProduct);
