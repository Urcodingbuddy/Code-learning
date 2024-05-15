class RailwayForm{
    constructor(name){
        this.name = name;
    }
    submit(status){
        // this.yatri = name;
        console.log(this.name +`'s form ${status} Successfully`); 
        
    };
    cancle(){
        console.log(this.name +`'s Form Cancelled Successfully`);
    };

    approved(){
        // console.log(this.passanger+ `'s form Submitted Successfully`);
        // this.name =givenname
        console.log(this.name+`'s Reservation Success`);

    };

};

let harry1 = new RailwayForm("Harry bro");
let harry2 = new RailwayForm("Harry bro");
harry1.submit("Submitted");
harry2.submit("Selected");
harry1.cancle("Calcelled");
let rohan = new RailwayForm("Robin");
rohan.submit();
let dalla = new RailwayForm("Shri");
dalla.approved("shriyanshu");