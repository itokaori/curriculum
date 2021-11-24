class Taiyaki {
    constructor (anko, cream, cheese) {
        this.anko = anko;
        this.cream = cream;
        this.cheese = cheese;
    }
}
let nakami = new Taiyaki('あんこ', 'クリーム', 'チーズ');

console.log('中身は', nakami.anko, 'です');
console.log('中身は', nakami.cream, 'です');
console.log('中身は', nakami.cheese, 'です');