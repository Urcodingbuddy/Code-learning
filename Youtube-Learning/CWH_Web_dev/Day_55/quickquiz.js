{
    let name = prompt("Enter your name")
    let Number = prompt("Sir please Enter your Phone Number")
    let marks = prompt("Enter your  total marks")

    let student_data = {
        "name": name,
        "Contact Number": Number,
        "Total marks": marks
    }

    alert("apka tatti name" + name)
    alert("apka guu phone number = " + Number)
    alert("Apke Guu marks = " + marks)
    console.log(student_data)
}