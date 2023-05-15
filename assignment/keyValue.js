class Employee{
    constructor(id, name){
        this.empId = id;
        this.empName = name;
    } 
}

class EmployeeRepo{
    constructor(){
        this.data = [];
    }

    addNewEmployee = (emp) => this.data.push(emp);

    deleteEmployee = (id) => {
        const index = this.data.findIndex((rec)=> rec.empId == id);
        this.data.splice(index, 1);
    }

    updateEmployee = (emp) => {
        const index = this.data.findIndex((rec)=> rec.empId == emp.empId);
        this.data.splice(index, 1, emp);
    }
    getAllEmployees = () => this.data;

    findEmployee = (id) => this.data.find((e)=>e.empId == id);
}