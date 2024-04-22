/*1. Definir una interfaz para representar un producto:
    a. La interfaz debe incluir propiedades para el nombre, el precio y la categoría
    del producto.
    b. Crear una clase que implemente la interfaz de producto.
    c. Instanciar un objeto de producto y asignarle valores a sus propiedades.*/

interface Product {
    name: string;
    price: number;
    category: string;
}
    
class ProductImplementation implements Product {
    name: string;
    price: number;
    category: string;
    
    constructor(name: string, price: number, category: string) {
        this.name = name;
        this.price = price;
        this.category = category;
    }   
}

const createProduct: Product = new ProductImplementation("Coliflor", 2500, "Vegetal");

console.log(createProduct);