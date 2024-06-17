package Static;

class Student {
    static int age = 5 ; // non - instance variable , (Static) 
    static String school; // non - instance variable , (Static)

    public void show() {
        System.out.println("In Show" + " " + age + school);

    }

    public static void study() {
        System.out.println("Studying" + age);
    }

    public class first_static {
        public  void main(String[] args) {

            Student obj = new Student();

            Student.study();

            // System.out.println(obj.age);

            // System.out.println(Student.school);

            obj.age = 19;
            obj.school = "Pwskills";

            Student obj1 = new Student();
            System.out.println(obj1.school);

            obj1.show(); // In show 0 ( becoz defualt value is 0)
            obj.show(); // In show 19

        }
    }

}