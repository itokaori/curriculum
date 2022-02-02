class Human {
    constructor(name, heigth, weigth, gender, age) {
            this.name = name;
            this.heigth = heigth;
            this.weigth = weigth;
            this.gender = gender;
            this.age = age;
    }
    walk() {
        console.log('歩きました');
    }
}

let yamada = new Human('yamada', 170, 60, '男', 30);
let suzuki = new Human('suzuki', 180, 70, '男', 35);

yamada.walk();

