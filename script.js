//1-vazifa
class Shaxs {
     constructor(name, age) {
         this.name = name;
         this.age = age;
     }
     introduce() {
         return `Salom, mening ismim ${this.name}, yoshim ${this.age}da.`;
     }
 }
 const person = new Shaxs("Ali", 30);
 console.log(person.introduce());
//2-vazifa
class Talaba extends Shaxs {
     constructor(name, age, studentID, major) {
         super(name, age);
         this.studentID = studentID;
         this.major = major;
     }
     introduce() {
         return `Salom, mening ismim ${this.name}, yoshim ${this.age}da. Talaba ID: ${this.studentID}, mutaxassisligim: ${this.major}.`;
     }
 }
 const student = new Talaba("Olim", 22, "T12345", "Informatika");
 console.log(student.introduce());
//3-vazifa 
class Tortburchak {
     constructor(width, height) {
         this.width = width;
         this.height = height;
     }
     getArea() {
         return this.width * this.height;
     }
     getPerimeter() {
         return 2 * (this.width + this.height);
     }
 }
 const rectangle = new Tortburchak(5, 10);
 console.log(`Yuza: ${rectangle.getArea()}`); 
 console.log(`Perimetr: ${rectangle.getPerimeter()}`); 
//4-vazifa
class Avtomobil {
     constructor(brand, model, year) {
         this.brand = brand;
         this.model = model;
         this.year = year;
     }
 
     drive() {
         return `Avtomobil ${this.brand} ${this.model} haydashga tayyor.`;
     }
 }
 const car = new Avtomobil("Toyota", "Camry", 2020);
 console.log(car.drive()); 
//5-vazifa
class BankHisobi {
     constructor(balance) {
         this.balance = balance;
     }
     deposit(amount) {
         this.balance += amount;
         return `Hisobingizga ${amount} qo'shildi. Yangi balans: ${this.balance}`;
     }
     withdraw(amount) {
         if (amount <= this.balance) {
             this.balance -= amount;
             return `Hisobingizdan ${amount} yechildi. Yangi balans: ${this.balance}`;
         } else {
             return `Kechirasiz, hisobingizda yetarli mablag' yo'q.`;
         }
     }
     checkBalance() {
         return `Hisobingizdagi qoldiq: ${this.balance}`;
     }
 }
 const account = new BankHisobi(1000);
 console.log(account.deposit(500)); 
 console.log(account.withdraw(300)); 
 console.log(account.checkBalance()); 