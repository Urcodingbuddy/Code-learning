package string;

public class Pangram {
    public static void main(String[] args) {
        String str1 = "The Quick Brown Fox Jumps Over Lazy Dog";

        boolean flag = false;

        str1 = str1.replace(" ", "");

        char[] ch = str1.toCharArray();

        int ar[] = new int[26];

        for (int i = 0; i < ch.length; i++) {
            ar[ch[i] - 65]++;
        }
        for (int i = 0; i < ar.length; i++) {
            if (ar[i] == 0) {
                System.out.println("It is not a pangram");
                flag = true;
            }
            if (flag == false)

            {
                System.out.println("It is a pangram");
            }
        }
    }

}
