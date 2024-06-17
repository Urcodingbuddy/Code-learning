package Oopscodes;

class test1 {
    int a;
    String name = "john";

    public static void main(String[] args) {
        // Declare the variable
        // create the object
        int num = 9;
        test1 obj = new test1();
        test1 obj1 = new test1();

        obj.name = "Ansh";

        System.out.println(obj.a);
        System.out.println(obj.name);
        System.out.println(obj1.a);
        System.out.println(obj1.name);
    }
}