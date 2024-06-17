package Games;

import java.util.Scanner;

public class practice {
    public static void main(String[] args) {
        // Scanner sc = new Scanner(System.in);
        // System.out.println("Enetr your number");
        int ab = 0;
        int ar[] = { 1, 2, 3, 4, 5, 6, 7, 15, 9, 10 };

        // int b = Integer.MIN_VALUE;

        for (int i = 0; i < ar.length; i++) {

            int result = Integer.MIN_VALUE;

            if (ar[i] > result) {
                result = ar[i];
                ab = result;
            }

        }
        System.out.println(ab);

    }

}
