class RailwayForm{
    constructor(passanger, trainNo, venture){
        this.passanger = passanger;
        this.trainNo = trainNo;
        this.venture = venture;
    
        console.log(`Passanger :${passanger}` )
        console.log(`Train No :${trainNo}`)
        console.log(`Venture :${venture}`)
        
    }
    preview(){
        console.log(this.passanger+": Your Form has been submitted for tran Number: "  + this.trainNo +" And your venture is: " + this.venture)

    }
    submit(){
        console.log(this.passanger+": Your Form has been submitted for tran Number: "  + this.trainNo)
    }
    cancel(){
        console.log(this.passanger+": Your Form has been cancelled for tran Number: "  + this.trainNo)
        this.trainNo = null;
    }
    
}

let harryform = new RailwayForm("harry", 13888 , "bhopal");
harryform.submit();
harryform.preview();