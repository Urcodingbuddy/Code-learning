import java.util.Scanner;

class Simple{
    public static void main(String[] args) {
        int age ;
        System.out.println("Enter Your age");
        Scanner ref = new Scanner(System.in);
        // age=ref.nextInt();
        // if(age>=18){
        //     System.out.println("You can vote...!");
        // }
        // else{
        //     System.out.println("You can't Drive");
        // }
        // System.out.println("Thank You");
            // If else Ladder
        // int marks = ref.nextInt();
        //     if(marks<0){
        //         System.out.println("Invalid Marks");
        //     }
        //     else if(marks<=30 & marks>0 ){
        //         System.out.println("Fail");
        //     }
        //     else if(marks<=50 & marks>30 ){
        //         System.out.println("Need more Practice");
        //     }
        //     else if(marks<=70 & marks>50){
        //         System.out.println("Pass, good ");
        //     }
        //     else{
        //         System.out.println("Excellent A+");
        //     }

            int a=10,b=20,c=30;
            if(a>b){

                if(a>c)
                {
                    System.out.println("A is greatest");
                }
                else{
                    System.out.println("C is greatest");
                }

            }
            else{
                if(b>c){
                    System.out.println("B is greatest");
                }
                else{
                    System.out.println("C is greatest");
                }
            }

    }
}