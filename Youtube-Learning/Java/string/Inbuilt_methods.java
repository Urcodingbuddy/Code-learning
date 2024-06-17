package string;

public class Inbuilt_methods {
    public static void main(String[] args) {
        String str = " pw skill java";
        // str.toUpperCase();
        String str1 = str.toUpperCase();
        System.out.println(str1.toUpperCase()); // System.out.println(str1); // both will givee same out put but only in
                                                // case when it is defined in another object.

        System.out.println(str.toLowerCase());
        System.out.println(str.length());
        System.out.println(str.charAt(5));
        System.out.println(str.substring(3, 8));
        System.out.println(str.indexOf("w"));
        System.out.println(str.indexOf("a"));
        System.out.println(str.lastIndexOf("a"));

    }

}
