package string;

public class comparing_s {
    public static void main(String[] args) {
        // String s1 = "pwskills";
        // String s2 = new String("pwskills");
        // System.out.println(s1 == s2);
        // System.out.println(s1.equals(s2));
        // String s1 = "pwskills";
        // String s2 = "pwskills";
        // String s3 = "PWSKILLS";

        // System.out.println(s1==s2); // Objects are identical
        // System.out.println(s1.equals(s2)); // Values are also identical
        // System.out.println(s1==s3); // Object are unidentical
        // System.out.println(s1.equals(s3)); // Values are also unidentical

        String s1 = "pwskills";
        String s2 = new String("Pwskills");
        String s3 = new String("pWskills");

        System.out.println(s1 == s2);
        System.out.println(s1 == s3);
        System.out.println(s2 == s3);

        System.out.println(s1.equals(s2));
        System.out.println(s1.equals(s3));
        System.out.println(s2.equals(s3));

        System.out.println(s1.equalsIgnoreCase(s2));
        System.out.println(s1.equalsIgnoreCase(s3));
        System.out.println(s2.equalsIgnoreCase(s3));

    }

}
