/*2. Diseñar una clase para representar una cuenta bancaria:
    a. La clase debe tener propiedades para el número de cuenta, el saldo y el
    nombre del titular.
    b. Definir métodos para depositar, retirar y consultar el saldo de la cuenta.
    c. Crear dos objetos de cuenta bancaria diferentes y realizar operaciones
    sobre ellos. */

class BankAccount {
    accountNumber: number;
    balance: number;
    owner: string;

    constructor( accountNumber: number,  balance: number,  owner: string) {
        this.accountNumber = accountNumber,
        this.balance = balance,
        this.owner = owner
    }

    depositar(moneyDeposited: number){
        this.balance =+ moneyDeposited    
        return console.log(`El usuario ${this.owner} ha depositado un total de $${moneyDeposited}. Ahora hay un total de $${this.balance} en la cuenta.`)
    }

    retirar(moneyRetired: number){
        if(this.balance >= moneyRetired){
            this.balance =- moneyRetired
            return console.log(`El usuario ${this.owner} ha retirado el total de: $${moneyRetired}. Ahora tienes: $${this.balance}`);
        }else{
            return console.log(`No puedes retirar dinero que no tienes. Ahora mismo tienes: $${this.balance} en la cuenta.`)
        }
    }

    consultar(){
        return this.balance
    }
}


const userBankOne = new BankAccount(25400, 1542, "Sebastian")
console.log(`El dinero total que tiene almacenado ${userBankOne.owner} es: $${userBankOne.consultar()}`)

userBankOne.depositar(1500)

userBankOne.retirar(3540)

userBankOne.consultar()