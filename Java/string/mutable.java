package string;

public class mutable {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Virat");
        System.out.println(sb);

        sb.append("Kohli");
        System.out.println(sb);

        StringBuilder sb1 = new StringBuilder("MS");
        System.out.println(sb1);

        sb1.append("Dhoni");
        System.out.println(sb1);

    }

}
