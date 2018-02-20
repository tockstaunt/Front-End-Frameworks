class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }

class Manager extends Employee {
      constructor (employees,yearsOnJob,name,salary,hireDate){
          super(name , salary , hireDate);
              this.employees = employees;
              this.yearsOnJob = yearsOnJob;
          
      }
      amountOfExperence(){
          console.log("This employee is in charge of "+this.employees+" emplyees whom work under him/her.");
      }
      onJob(){
          console.log("Has been on the job for "+this.yearsOnJob+" years.");
      }
  }

class Designer extends Employee{
        constructor(ability,degree,name, salary, hireDate){
            super(name, salary, hireDate);
                this.ability = ability;
                this.degree = degree;
            
        }
            abilitys(){console.log("This employee is "+this.ability+" as a Designer.");}
            degrees(){console.log("This Designer has an "+this.degree+" degree.");}
            
  }

class QA extends Employee{
      constructor(bugsList,bugsCaught,name,salary,hireDate){
          super(name,salary,hireDate);
          this.bugsList = bugsList;
          this.bugsCaught = bugsCaught;
      }
      currentAmountOfBugs(){console.log("Current amount of bugs in the code "+this.bugsList);}
      caughtBugs(){console.log("This employee caught this "+this.bugsCaught+" bugs");}

  }

let andrew = new Manager(12,10,"andrew",50000,2008);
let kevin = new Designer("good","art","Kevin",35000,2017);
let chad = new QA(247,98,"chad",45000,2001);

andrew.getName();
andrew.getSalary();
andrew.getHireDate();
andrew.amountOfExperence();
andrew.onJob();

kevin.getName();
kevin.getSalary();
kevin.getHireDate();
kevin.abilitys();
kevin.degrees();

chad.getName();
chad.getSalary();
chad.getHireDate();
chad.caughtBugs();
chad.currentAmountOfBugs();