package string;

public class Reverse {
    public static void main(String[] args) {
        // Case - 01 ! Reversing the number by using lenght and charAt fuction with for
        // loop.

        String str1 = "pwjava";
        String str2 = " ";

        for (int i = str1.length() - 1; i >= 0; i--) {
            str2 = str2 + str1.charAt(i);
        }
        System.out.println("Before Reversing = " + str1);
        System.out.println("After Reversing =" + str2);

        // Case - 02 !
        String str3 = "Pwskills java";
        String str4 = " ";

        String sarr1[] = str3.split(" ");

        for (int i = sarr1.length - 1; i >= 0; i--) {
            str4 = str4 + sarr1[i] + " ";
        }

        System.out.println("Before Reversing :- " + str1);
        System.out.println("After Reversing :-" + str2);

        // Case 3 is same as Case 1 (Written in Note book)

        String str5 = "Pwskills java";
        String str6 = " ";

        String sarr[] = str5.split(" ");

        for (String elem : sarr) {
            for (int i = elem.length() - 1; i >= 0; i--) {
                str6 = str6 + elem.charAt(i);
            }
            str6 = str6 + " ";
        }
        System.out.println("Before Reversing :" + str5);
        System.out.println("After  Reversing :" + str6);

    }
}
