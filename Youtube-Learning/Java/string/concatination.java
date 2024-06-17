package string;

public class concatination {
    public static void main(String[] args) {
        // String s1 = new String("Pwskills");
        // s1.concat("Banglore");
        // System.out.println(s1);

        // String s1 = "pwjava";
        // String s2 = s1.concat("skill");
        // String s3 = new String("DSA");
        // s3 = s3.concat("skills");
        // System.out.println(s1);
        // System.out.println(s2);
        // System.out.println(s3);

        // Concatination Using "+" Oprator

        String s1 = "pw";
        String s2 = "pw" + "java";
        String s3 = "pw" + "java" + "Banglore";
        String s4 = s1 + s2;

        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
        System.out.println(s4);

        String str = "pw" + "100" + "99";
        System.out.println(str);

        String con1 = "pw";
        String con2 = "100";
        String con3 = con1.concat(con2);
        String con4 = con3.concat("99");

        System.out.println(con4);

    }

}
