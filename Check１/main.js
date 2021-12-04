let numbers = [2, 5, 12, 13, 15, 18, 22];

 function isEven(num) {
    for (let i = 0; i < numbers.length; i++){
        if(num[i] % 2) num.splice(i--,1);
    }
    console.log(num + 'は偶数です');
}
isEven(numbers);



class car {
    constructor (gas, number) {
        this.gas = gas;
        this.nember = number;
    }
}
let getNumGas = new car (30, 1234);
console.log('ガソリンは',getNumGas.gas,'ナンバーは',getNumGas.nember,'です');