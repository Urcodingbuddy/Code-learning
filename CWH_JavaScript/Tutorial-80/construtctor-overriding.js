

class Employee {
    constructor(name) {
        console.log(`${name} Bhai`); // Ensures the name is printed correctly
        console.log(`Employee constructor is Here`);
        this.name = name;
    }
    login() {
        console.log(`Employee has logged In`);
    }
    logout() { // Corrected typo from 'logut' to 'logout'
        console.log(`Employee has logged out`);
    }
    RequestLeave(leaves) {
        console.log(`Employee has requested ${leaves} leaves - Auto Approved`);
    }
}

class Programmer extends Employee {
    constructor(name) {
        super(name); // Passes the name to the Employee constructor
    }
    
    RequestCoffee(x) {
        console.log(`Programmer has requested ${x} coffees`);
    }
    RequestLeave(leaves) {
        super.RequestLeave(leaves); // Now correctly uses the leaves parameter
        console.log(`One extra leave is Granted`);
    }
}

// Example usage:
let e = new Employee();
e.login();
e.logout(); // Corrected method call
e.RequestLeave(5);

let p = new Programmer("John Smith");
p.login();
p.logout(); // Corrected method call
p.RequestCoffee(2);
p.RequestLeave(3); // Now you can pass any number of leaves, and it will request that number + 1