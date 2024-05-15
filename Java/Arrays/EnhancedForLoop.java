package Arrays;

public class EnhancedForLoop{
    public static void main(String[] args) {
      

        int nums[][] = {

                            {3,9,8,7},
                            {2,4,5,6},
                            {8,3,2,4} 
                            
        };
        




        for(int i = 0; i<=2; i++)
        {
            for(int j=0;j<=1;j++)
            {
                System.out.print(nums[i][j] + " ");
            }
            System.out.println();
        }
    }
   
    
}
