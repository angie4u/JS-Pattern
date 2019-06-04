const readline = require('readline')
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const async = require('async');

class HotDrink
{    
    consume(){}
}


class Tea extends HotDrink 
{
    // Tea class should implement consume method
    consume(){
        console.log('This tea is nice with lemon!');
    }
}

class Coffee extends HotDrink{
    consume() {
        console.log('This coffee is delicious!');
    }
}

class HotDrinkFactory
{
    public amount: number;
    prepare(amount: number) {}
}

class CoffeeFactory extends HotDrinkFactory{
    prepare(amount){
        console.log(`Grind some beans, boil water, pour ${amount}ml`);
        return new Coffee();
    }
}

class TeaFactory extends HotDrinkFactory{
    prepare(amount){
        console.log(`Put in tea bag, boil water, pour ${amount}ml`);
        return new Tea();
    }
}

let AvailableDrink = Object.freeze({
    coffee: CoffeeFactory,
    tea: TeaFactory
})

class HotDrinkMachine
{    
    private factories;
    private type: string;
    constructor() {
        this.factories = {};
        for (let drink in AvailableDrink)
        {
            this.factories[drink] = new AvailableDrink[drink]();
        }
    }

    makeDrink(type: string){
        switch(type){
            case 'tea':
                return new TeaFactory().prepare(200);
            case 'coffee':
                return new CoffeeFactory().prepare(50);
            default:
                throw new Error(`Don't know how to make ${type}`);
        }
    }

    interact(consumer){
        rl.question('Please specify drink and amount '+ `(e.g., tea 50): `, answer=>{
            let parts = answer.split(' ');
            let name = parts[0];
            let amount = parseInt(parts[1]);
            let d = this.factories[name].prepare(amount);
            rl.close();
            consumer(d);
        });
    }
}



export const runTest = () => {
    let machine = new HotDrinkMachine();
    
    machine.interact(
      function (drink) {
        drink.consume();
      }
    );
}