class IceCreamMaker {
    // constructor
    constructor(flavor, milk, size){
        //atributos
        this.flavor = 'vanila';
        this.milk = 'lactosa';
        this.size = 'Medium';

    }
    
    //metodo aka funciones
    getFlavor( ){
        return this.flavor
    }
    getMilk( ) {
        return this.milk
    }
    getSize( ){
        return this.size
    }
   
   
   /* chooseFlavor(flavor){
        this.flavor = flavor;
        console.log(`flavor for iceCream is: ${this.flavor}`);
    }
    chooseMilk(milk){
        this.milk = milk;
        console.log(` type of Milk  is: ${this.milk}`);
    }
    chooseSize(){
        console.log(`Size for iceCream : ${this.size}`);
    }*/

    printIceCream() {
    console.log(`heres's your IceCream: ${this.getFlavor()},and made with ${this.getMilk()}, and size ${this.getSize()}`)
}

}

// implementar por medio de instancia 

const firstIceCream = new IceCreamMaker('chocolate', 'almendra', 'medium');

/*firstIceCrream.chooseFlavor('fresa');
firstIceCrream.chooseMilk('almendras');
firstIceCrream.chooseSize('large');
firstIceCrream.printIceCream();*/


firstIceCream.printIceCream();




