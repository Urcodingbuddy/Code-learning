public class Switch {
    public static void main(String[] args) {
        int a=4, b=590, ch = 3;
        switch (ch) {
            case 1:
                System.out.println("sum " + (a + b));
                break;
            case 2:
                System.out.println("sub " + (a - b));
                break;
            case 3:
                System.out.println("mul " + (a * b));
                break;
            case 4:
                System.out.println("div " + (a / b));
                break;
            default: 
                System.out.println("invalid");
                break;
        }
    }
}
