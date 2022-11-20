"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 1. BASIC TYPE
 */
// 1.1 STRING
let fullName;
fullName = 'Mannnnnnnnnnnnnnnnnn';
// fullName = true;
// fullName = 5;
// 1.2 NUMBER
let age;
age = 50;
// age = 'Man';
// 1.3 BOOLEAN
let isLoading;
isLoading = true;
// 1.4 NULL VÀ UNDEFINED
let nullVariable;
let undefinedVariable;
nullVariable = undefined;
nullVariable = null;
undefinedVariable = null;
/**
 * 2. ANY TYPE
 */
let something;
something = 'Man';
something = 50;
something = false;
/**
 * 3. OBJECT TYPE
 */
// optional property
let person = {
    name: 'Man',
    age: 50,
};
person.grade = 20;
/**
 * 4. ARRAY TYPE
 */
// 4.1 STRING ARRAY
// sử dụng nhiều hơn
let stringArray = ['1', '2'];
// sử dụng ít
let stringArray1 = ['3', '4'];
// 4.2 OBJECT ARRAY
let personList = [
    { name: 'Man', age: 3 },
    { name: 'Hai', age: 4 },
];
/**
 * 5. FUNCTION TYPE
 */
// 5.1 Function trả về kết quả
let sum = (a, b) => {
    return a + b;
};
// 5.2 Function không trả về kết quả
let checkSum = (a, b) => {
    const result = a + b;
    console.log(result);
};
// 5.3 Object có property là function
let person1;
/**
 * 6. UNION TYPE
 */
// call api lấy tuổi
let age1;
age1 = '5';
age1 = 5;
/**
 * 7. ENUM TYPE
 */
// let loaiGhe = {
//   Vip: 'Vip',
//   Thuong: 'Thuong',
// };
var LoaiGhe;
(function (LoaiGhe) {
    LoaiGhe["Vip"] = "Vip";
    LoaiGhe["Thuong"] = "Thuong";
})(LoaiGhe || (LoaiGhe = {}));
let ghe = {};
// ghe.loaiGhe = 'BinhThuong';
// ghe.loaiGhe = 'Vip';
ghe.loaiGhe = LoaiGhe.Vip;
// let user1: { name: string; age: number };
// let user2: { name: string; age: number };
let user1;
let user2;
let student = { name: 'q', age: 2, gender: 's', grade: 5 };
let employee;
student.grade;
let count;
let coun1;
let action;
// action = 'attack';
action = 'tancong';
// api lấy danh sách banner
let banners;
// api lấy danh sách người dùng
let danhSachLoaiNguoidung;
/**
 * 11. CLASS ( HƯỚNG ĐỐI TƯỢNG )
 * private, public, protected, readonly, abstract
 */
class Dog {
    //   public name: string;
    //   private age: number;
    constructor(
    // public có thể sử dụng bên trong hoặc bên ngoài class, khi không khai báo tự động hiệu là public
    name, 
    // private chỉ đc sử dụng bên trong class , bên ngoài ko sử dụng đc
    age, 
    // readonly chỉ thể có đọc giá trị, ko thể gán
    color) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.name = name;
        this.age = age;
        this.color = color;
    }
}
const dog = new Dog('Dog 1', 1, 'black');
dog.name = 'Dog 2';
console.log(dog.color);
// 1 class implements 1 interface thì những thuộc tính từ interface đó phải có trong class mà sử dụng implements
// abstract là từ khóa khai báo 1 class trừu tượng
class Animal {
    eat() {
        const food = this.find();
    }
    drink() { }
}
class Dog1 extends Animal {
    find() { }
}
class Tiger extends Animal {
    find() {
        // đi săn
    }
}
class Cat extends Animal {
    find() {
        // xin ăn
    }
    eat() {
        console.log(this.name);
        console.log(this.color);
        // console.log(this.age);
    }
}
const cat = new Cat();
cat.name = 'Cat 1';
// cat.color
