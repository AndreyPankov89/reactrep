

class Employers{
    constructor(emp){
        this.employers = emp.filter((name) => {return name.length >0 && name.length != ""}).map((name) => name.toLowerCase().trim());
    }
    list(){
        return this.employers;
    }
}

export {Employers};