package Patterns;

public class pattern2 {
    public static void main(String[] args) {
        // int n=12;
        // for(int i=0; i<5; i++)
        // {
        // for(int j=0; j<5; j++)
        // {
        // if(i==0 || j==0 || i==4 || j==4)
        // {
        // System.out.print("*");
        // }
        // else
        // {
        // System.out.print(" ");
        // }
        // }
        // System.out.println();
        // }
        int n = 55;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i == 0 || j == 0 || i == n - 1 || j == n - 1) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }

    }
}
