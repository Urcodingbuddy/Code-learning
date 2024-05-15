class RailwayForm {
    constructor(givenname, trainno) {
      console.log("ticket is: "+ givenname+" "+trainno)
      this.name = givenname
      this.trainno = trainno
    }
    submit() {
      console.log(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel() {
      console.log(this.name + ": This form is cancelled for train number: " + this.trainno)
    }
    
  }
  
  // Create a form for Harry
  let harryForm = new RailwayForm("Harry", 145316)
  // Fill the form with Harry's details
  // harryForm.fill("Harry", 145316)
  
  // Create a forms for Rohan
  let rohanForm1 = new RailwayForm("Rohan", 222420)
  let rohanForm2 = new RailwayForm("Rohan", 2229211) 
  // Fill the forms with Rohan's details
  // rohanForm1.fill("Rohan", 222420)
  // rohanForm2.fill("Rohan", 2229211)
  
  harryForm.submit()
  rohanForm1.submit()
  rohanForm2.submit()
  rohanForm1.cancel()