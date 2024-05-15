class Employee{
    login(){
        console.log(`Employee has logged In`);
    }
    logut(){
        console.log(`Employee has logged out`)
    }
    RequestLeave(leaves){
        console.log(`Employee has requested ${leaves} leaves - Auto Approved`)
    }
}

class Programmer extends Employee{
    RequestCoffee(x){
        console.log(`Programmer has requested ${x} coffees`)
    }
    RequestLeave(leaves){
        // console.log(`Employee has requested ${leaves+1} leaves (one extra leave)`)
        super.RequestLeave(4)
        console.log(`One extra leave is Granted`)
    }
}

let e = new Employee()
e.login();
e.RequestLeave(5);

let p = new Programmer()
p.login();
p.RequestCoffee(2)
p.RequestLeave(2)