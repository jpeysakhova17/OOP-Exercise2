abstract class Employee {
    name: string;
    constructor(name:string) {
        this.name=name;
    }
    abstract calcPay(): number; 

    printPay():void {
            console.log(`${this.name} is paid $${this.calcPay().toFixed(2)}`);
        }
        
}

class Volunteer extends Employee {
    calcPay(): number {
        return 0;
    }
}

class SalaryEmployee extends Employee {
    annualSalary: number;

    constructor (name: string, annualSalary: number) {
        super(name);
        this.annualSalary = annualSalary;
    }
    calcPay(): number {
        return this.annualSalary / 26;
    }
}

class HourlyEmployee extends Employee {
    hourlyWage: number;
    hoursWorked: number;

    constructor(name: string, hourlyWage: number, hoursWorked: number) {
        super(name);
        this.hourlyWage = hourlyWage;
        this.hoursWorked = hoursWorked;
    }
    calcPay(): number {
        return this.hourlyWage * this.hoursWorked;
    }
}

let Jenny: Volunteer = new Volunteer("Jenny");
let Eli: SalaryEmployee = new SalaryEmployee("Eli", 40000);
let Jasmine: HourlyEmployee = new HourlyEmployee("Jasmine", 25, 30);

let employeeArray: Employee[] = [];
employeeArray.push(Jenny);
employeeArray.push(Eli);
employeeArray.push(Jasmine);

// for (const employees: Employee of employeeArray) {
//     console.log()
// }

for (let i=0; i<employeeArray.length; i++) {
    employeeArray[i].printPay();
}
