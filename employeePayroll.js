class EmployeePayrollData {
    // properties
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4]; 
    }

    // getter and setter
    get id() {return this._id;}
    get name() {return this._name;}
    get gender() {return this._gender;}
    get startDate() {return this._startDate;}

    set id(id){
        let idRegex = RegExp('^[1-9][0-9]*$');
        if(idRegex.test(id)) this._id = id;
        else throw "ID is incorrect";
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name)) this._name = name;
        else throw "Name is incorrect";
    }
    set salary(salary){
        let salaryRegex = RegExp('^[1-9][0-9]*$');
        if(salaryRegex.test(salary)) this._salary = salary;
        else throw "ID is incorrect";
    }
    set gender(gender){
        let genderRegex = RegExp("^[MF]$");
        if(genderRegex.test(gender)) this._gender = gender;
        else throw "Gender is incorrect";
    }
    set startDate(startDate){
        let currentDate = new Date();
        if(startDate <= currentDate) this._startDate = startDate;
        else throw "Start Date is incorrect";
    }
    set email(email) {
        // Email should be of the format abc(.xyz)@bridgelabz.co(.in)
        let emailFormatRegex = RegExp("^[a-zA-Z]+(\\.[a-zA-Z_+-]+){0,1}[@]{1}[a-zA-Z]+\\.[a-zA-Z]+(\\.[a-zA-Z]+){0,1}");
        let emailLastOptionalPartRegex = RegExp(".+\\..{2,}");
        if(emailFormatRegex.test(email) && emailLastOptionalPartRegex.test(email))
            this._email = email;
        else 
        throw "Email should be of the format abc(.xyz)@capgemini.co(.in)";
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric'}
        const empDate = this.startDate === undefined ? "undefined" 
                            : this.startDate.toLocaleDateString("en-US", options);
        return "id: " + this.id + ", name: " + this.name + ", salary: " + this.salary
            +  ", gender: " + this.gender + ", startDate: " + empDate;
    }
}

let employeePayrollData=new EmployeePayrollData(1, "Mark", 3000, "M", new Date());
process.stdout.write(employeePayrollData.toString()+"\n");
let employeePayrollData2=new EmployeePayrollData(1,"Terrisa",30000,"F",new Date());
    process.stdout.write(employeePayrollData2.toString()+"\n");

// Name Validation
try{
    employeePayrollData.name="jon";
    process.stdout.write(employeePayrollData.toString()+"\n");
}catch(exception){
    console.error(exception);
}

// Id Validation: Should be greater than 0
try{
    employeePayrollData2.id = 0;
}catch(exception){
    console.error(exception);
}

// Salary Validation: Should be greater than 0
try{
    employeePayrollData2.salary = 0;
}catch(exception){
    console.error(exception);
}

// Gender Validation: Should be M or F
try{
    employeePayrollData2.gender = "X";
}catch(exception){
    console.error(exception);
}

// Start Date Validation: Should not be future date
try{
    employeePayrollData2.startDate = new Date("2020-11-11");
    process.stdout.write(employeePayrollData2.toString()+"\n");
}catch(exception){
    console.error(exception);
}
// Email Validation: Format should be abc(.xyz)@bridgelabz.co(.in)
try{
    employeePayrollData2.email = "abc.xyz@capgemini.co.in";
    process.stdout.write("Email Updated\n");
}catch(exception){
    console.error(exception);
}

// Email Validation: Format should have '@bridgelabz' mandatoryt part
try{
    employeePayrollData2.email = "abc.xyz@co";
    process.stdout.write("Email Updated\n");
}catch(exception){
    console.error(exception);
}

// Email Validation: Format should have '.co' mandatory part
try{
    employeePayrollData2.email = "abc.xyz@capgemini";
    process.stdout.write("Email Updated\n");
}catch(exception){
    console.error(exception);
}

// Email Validation: Format can have '.xyz' part with _, -, +
try{
    employeePayrollData2.email = "abc.x*yz@capgemini";
    process.stdout.write("Email Updated\n");
}catch(exception){
    console.error(exception);
}

// Email Validation: Last optional part should have two characters
try{
    employeePayrollData2.email = "abc@capgemini.co.fg";
    process.stdout.write("Email Updated\n");
}catch(exception){
    console.error(exception);
}

