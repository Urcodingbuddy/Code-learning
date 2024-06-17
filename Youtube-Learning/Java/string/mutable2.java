package string;

public class mutable2 {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        System.out.println(sb.capacity());
        sb.append("abcdefghijklmnop");
        System.out.println(sb.capacity());
        sb.append("q");

        System.out.println(sb.capacity()); // How many chacractor you can add

        System.out.println(sb.length()); // The toatal variables (stored/Present) in
        // it (17)

        StringBuffer sb1 = new StringBuffer("Sachin");
        System.out.println(sb1);
        System.out.println(sb1.capacity());
        sb1.setCharAt(1, 'A');
        System.out.println(sb1);

        StringBuilder sb3 = new StringBuilder(4159);
        System.out.println(sb3.capacity());
        sb3.append("Java");
        System.out.println(sb3);
        sb3.trimToSize();
        System.out.println(sb3.capacity());

        StringBuilder sb4 = new StringBuilder();
        sb4.append("PWjava");
        System.out.println(sb4.reverse());

    }

}