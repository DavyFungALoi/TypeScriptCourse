class Department {
  // private id: string;
  // private name: string = "DEFAULT";
  private employees: string[] = [];
  constructor(private readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id
  }
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  ///  this.id = "d2"
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Davy");

// accounting.employees[2] = "Anna"

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "s", describe: accounting.describe };
// accountingCopy.describe();
