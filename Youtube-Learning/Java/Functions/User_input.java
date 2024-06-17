package Functions;

import java.util.Scanner;

public class User_input {
    public static void main(String[] args) {
        System.out.println("Enter the age");
        Scanner scan = new Scanner(System.in);
        int age = scan.nextInt();
        System.out.println("Age is " + age);

        System.out.println("Enter the avg marks");
        double avg = scan.nextDouble();
        System.out.println("Avg is " + avg);

        System.out.println("Enter the name");
        String name = scan.next();
        System.out.println("Name is " + name);

        // System.out.println("Enter the age");
        // Scanner scan = new Scanner(System.in);
        // int age = scan.nextInt();
        // System.out.println("Age is " + age);

        // System.out.println("Enter the avg marks");
        // double avg = scan.nextDouble();
        // System.out.println("Avg is " + avg);

        // System.out.println("Enter the name");
        // String name = scan.next();
        // System.out.println("Name is" + name);
    }

}
