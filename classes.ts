abstract class Department {
  static fiscalyear = 2020;
  // private id: string;
  // private name: string = "DEFAULT";
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id
  }

  static createEmployee(name: string) {
    return { name: name };
  }
  abstract describe(this: Department): void;
  addEmployee(employee: string) {
    this.employees.push(employee);
    ///  this.id = "d2"
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
///extends = inheritance
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log('IT department - ID:')
  }
}
const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalyear);

const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Davy");

// it.employees[2] = "Anna"

it.describe();
it.printEmployeeInformation();

console.log(it);

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment

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

  private constructor(id: string, private reports: string[]) {
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
  describe() {
    console.log("accounting departement  is ");
  }

  static getInstance () {
    if (this.instance) {
      return this.instance
    }
    this.instance = new AccountingDepartment('d2', []
    ); return this.instance

  }
}

const accounting = AccountingDepartment.getInstance()
const accounting = new AccountingDepartment("d3", []);

accounting.mostRecentReport = "Your End Report";
accounting.addReport("something went wrong..");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printReports();
accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = { name: "s", describe: accounting.describe };
// accountingCopy.describe();
