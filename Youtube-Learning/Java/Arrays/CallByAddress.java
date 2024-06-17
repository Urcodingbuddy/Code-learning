package Arrays;

public class CallByAddress {
    public static void main(String[] args) {
        
        int nums[] = new int[4] ;
        nums[0] = 8;
 
        for(int i=0;i<=3;i++)
        {
            System.out.println(nums[i]);
        }
       
        

        // Normal way
        // System.out.println(nums[0]);
        // System.out.println(nums[1]);
        // System.out.println(nums[2]);
        // System.out.println(nums[3]);
        

    }
}
