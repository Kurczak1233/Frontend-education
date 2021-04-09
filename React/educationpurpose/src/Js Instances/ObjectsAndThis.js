const car = {
    brand: 'opel',
    age: 2018,
    showAge()
    {
        console.log(`Car age: ${this.age}`);
    },
    showBrand: () => { // DOES NOT WORK PROPERLY! //function() works good.
        console.log(`Car brand: ${this.brand}`);
    }
}

const dog = {
    name: 'rocky',
    showName() {
        console.log(`Imię psa to ${this.name}`)
    }
}

dog.showName(); //Rocky!
//Zmieniamy kontekst funkcji.
const dogname = dog.showName
dogname(); // UNDEFINED BO TO JEST KONKTEST GLOBALNY !
//Solution: Bind()
const dogname2 = dog.showName.bind(dog);
dogname2();
