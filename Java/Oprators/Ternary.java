package Oprators;

public class Ternary {
    public static void main(String[] args) {
        int a = 30;
        int b = 20;
        int c = 30;

        // int result =(a<b)? a:b;
        // System.out.println(result);

        // String res=(a<b)?"Its less":"Its greater";
        // System.out.println(res);

        // String resl=(a>b)?((a<c)?"A value is lesser":"c is bigger");
        int numRes = (a < b) ? ((a < c) ? a : c) : (b < c) ? b : c;
        System.out.println(numRes);
    }
}
