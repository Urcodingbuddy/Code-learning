// We cannot access a non - static variable inside a static method, But we can access static variables inside a non-static method

class student {
    int age; // instance variable, non static variable
    static String school; // non-instance variable, static variable, this can be accessed using class name
    static{
        school = "PW";
        // System.out.println(school);
    }
    public void show() { 
        age = 15;
        System.out.println("The age of the student is: " +age + " " + school);
    }
    public static void study(){
        System.out.println("Studying at the school called " + school); // Non static variable can not be accessed here 
    }
}


public class Demo{

    static{
        System.out.println("This is a static block");
    }
    public static void main(String[] args) {

        System.out.println("in main method");

        student obj = new student();

        obj.age = 19;
        obj.school = "Pwskills";

        
        student obj1 = new student();
        obj1.school = "Pwskills.com";
        student.study();
        obj.show();
        obj1.show();
    }
}