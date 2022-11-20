/**
 * 1. BASIC TYPE
 */
// 1.1 STRING
let fullName: string;

fullName = 'Mannnnnnnnnnnnnnnnnn';
// fullName = true;
// fullName = 5;

// 1.2 NUMBER
let age: number;

age = 50;
// age = 'Man';

// 1.3 BOOLEAN
let isLoading: boolean;

isLoading = true;

// 1.4 NULL VÀ UNDEFINED
let nullVariable: null;
let undefinedVariable: undefined;

nullVariable = undefined;
nullVariable = null;
undefinedVariable = null;

/**
 * 2. ANY TYPE
 */
let something: any;

something = 'Man';
something = 50;
something = false;

/**
 * 3. OBJECT TYPE
 */
// optional property
let person: { name: string; age: number; grade?: number } = {
  name: 'Man',
  age: 50,
};

person.grade = 20;

/**
 * 4. ARRAY TYPE
 */
// 4.1 STRING ARRAY
// sử dụng nhiều hơn
let stringArray: string[] = ['1', '2'];
// sử dụng ít
let stringArray1: Array<string> = ['3', '4'];

// 4.2 OBJECT ARRAY
let personList: { name: string; age: number }[] = [
  { name: 'Man', age: 3 },
  { name: 'Hai', age: 4 },
];

/**
 * 5. FUNCTION TYPE
 */
// 5.1 Function trả về kết quả
let sum = (a: number, b: number): number => {
  return a + b;
};

// 5.2 Function không trả về kết quả
let checkSum = (a: number, b: number): void => {
  const result = a + b;

  console.log(result);
};

// 5.3 Object có property là function
let person1: { name: string; work: Function; learn: () => number };

/**
 * 6. UNION TYPE
 */
// call api lấy tuổi
let age1: string | number;

age1 = '5';
age1 = 5;

/**
 * 7. ENUM TYPE
 */
// let loaiGhe = {
//   Vip: 'Vip',
//   Thuong: 'Thuong',
// };

enum LoaiGhe {
  Vip = 'Vip',
  Thuong = 'Thuong',
}

let ghe: { name?: string; soGhe?: number; loaiGhe?: LoaiGhe } = {};

// ghe.loaiGhe = 'BinhThuong';
// ghe.loaiGhe = 'Vip';
ghe.loaiGhe = LoaiGhe.Vip;

/**
 * 8. INTERFACE
 */

interface Person {
  name: string;
  age: number;
  gender: string;
}

interface Person {
  grade: number;
}

// let user1: { name: string; age: number };
// let user2: { name: string; age: number };

let user1: Person;
let user2: Person;

interface Student extends Person {
  learn: () => void;
}

let student: Person = { name: 'q', age: 2, gender: 's', grade: 5 };
let employee: Person;

student.grade;
// student.learn
// employee.learn

/**
 * 9. TYPE
 */
// giống với interface
type Person1 = {
  name: string;
  age: number;
};

type Person2 = Person1 & {
  grade: number;
};

type StringNumber = string | number;

let count: StringNumber;
let coun1: StringNumber;

type Action = 'tancong' | 'phongthu';

let action: Action;
// action = 'attack';
action = 'tancong';

/**
 * 10. GENERIC TYPE
 */
interface Banner {
  maBanner: number;
  maPhim: number;
  hinhAnh: string;
}

interface MaLoaiNguoiDung {
  maLoaiNguoiDung: string;
  tenLoai: string;
}

// chữ M có thể đổi được thành chữ khác
export interface Response<M> {
  statusCode: number;
  message: string;
  content: M;
  dateTime: string;
  messageConstants: string | null;
}
// api lấy danh sách banner
let banners: Response<Banner[]>;
// api lấy danh sách người dùng
let danhSachLoaiNguoidung: Response<MaLoaiNguoiDung[]>;

/**
 * 11. CLASS ( HƯỚNG ĐỐI TƯỢNG )
 * private, public, protected, readonly, abstract
 */
class Dog {
  //   public name: string;
  //   private age: number;

  constructor(
    // public có thể sử dụng bên trong hoặc bên ngoài class, khi không khai báo tự động hiệu là public
    public name: string,
    // private chỉ đc sử dụng bên trong class , bên ngoài ko sử dụng đc
    private age: number,
    // readonly chỉ thể có đọc giá trị, ko thể gán
    readonly color: string
  ) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}

const dog = new Dog('Dog 1', 1, 'black');

dog.name = 'Dog 2';
console.log(dog.color);
// dog.color = 'red';
// dog.age;

interface IAnimal {
  eat: () => void;
  drink: () => void;
}

// 1 class implements 1 interface thì những thuộc tính từ interface đó phải có trong class mà sử dụng implements
// abstract là từ khóa khai báo 1 class trừu tượng
abstract class Animal implements IAnimal {
  public name: string;
  private age: number;
  // chỉ những class extends đến class Animal mới chấm đến đc color
  protected color: string;

  abstract find(): void;

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
