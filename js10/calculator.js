
const calc = {
    add( a, b ){
        return a + b;
    },
    substr(a, b){
        return a - b;
    },
    mult(a,b){
        return a * b;
    },
    div(a, b){
        return a / b;
    },
    power: (a, b) => a ** b,
}

module.exports = calc;
