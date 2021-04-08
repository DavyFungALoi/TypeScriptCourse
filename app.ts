class Department {

  static fiscalyear = 2020
  // private id: string;
  // private name: string = "DEFAULT";
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id
  }

  static createEmployee(name: string) {
    return { name: name };
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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}
const employee1 = Department.createEmployee('Max')
console.log(employee1, Department.fiscalyear)


const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Davy");

// it.employees[2] = "Anna"

it.describe();
it.printEmployeeInformation();

console.log(it);

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "IT");
    this.lastReport = reports[0];
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d3", []);

accounting.mostRecentReport = "Your End Report";
accounting.addReport("something went wrong..");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printReports();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "s", describe: accounting.describe };
// accountingCopy.describe();
