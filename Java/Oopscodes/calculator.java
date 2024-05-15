package Oopscodes;
// class calc {

    // public int add(int n1, int n2) {
    //     int result = n1 + n2;
    //     return result;
    // }

    // public int add2 (int n1,int n2, int n3)
    // {
    //     int result = n1 + n2 + n3;
    //     return result;
    // }


// }

class calc{
    public void show(byte num){
        System.out.println("byte" + num);
    }
    public void show(int num){
        System.out.println("int" + num);
    }
    public void show(double num){
        System.out.println("double" + num);
    }
    public void show(char num){
        System.out.println("char" + num);
    }
}

public class calculator {

    public static void main(String[] args) {

        calc obj = new calc();
        // int result = obj.add(4, 3);
        // int res1 = obj.add2(4, 3, 2);
        // System.out.println(result);

        obj.show(5);
        
    }

}
