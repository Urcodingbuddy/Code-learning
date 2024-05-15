package Oprators;

public class Conditional {
    public static void main(String[] args)
    // {
    // int age=17;
    // if(age >=18)
    // {
    // System.out.println("Legal Adult")
    // }
    // else
    // {
    // System.out.println("Illegal");
    // }

    // }

    // {
    // int age=17;
    // if(age >=18)
    // {
    // System.out.println("Legal Adult");
    // }
    // else if(age >=75)
    // {
    // System.out.println("Old age");
    // }

    // else
    // {
    // System.out.println("You are a kid");
    // }

    // }
    {
        int age = 68;

        if (age >= 18 && age <= 60) {
            if (age >= 20 && age <= 30) {
                System.out.println("You are in 20's ");
            } else if (age >= 30 && age <= 60) {
                System.out.println("You are in 30's");
            } else {
                System.out.println("You are still a teen");
            }

        } else if (age >= 60) {
            System.out.println("You are 60+ old man");
        } else {
            System.out.println("You are still a kid");
        }

    }
}
