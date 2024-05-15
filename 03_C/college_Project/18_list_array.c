// #include<stdio.h>
// #include<conio.h>

// int main()
// {
//     int a[10],i;
//     printf("Enter the array elements\n");
//     for(i=0;i<10;i++)
//     scanf("%d",&a[i]);
//     printf("Display array list \n");
//     for(i=0;i<10;i++)
//     printf("%d Element is %d \n",i+1,a[1]);
//     return 0;
// }



#include <stdio.h>

int main()
{
    //1
    int i, total;

    //2
    printf("Enter total no of elements : ");
    scanf("%d", &total);

    //3
    int myArray[total];

    //4
    for (i = 0; i < total; i++)
    {
        printf("Enter no %d : ", i + 1);
        scanf("%d", &myArray[i]);
    }

    //5
    printf("You have entered : ");
    for (i = 0; i < total; i++)
    {
        printf("%d ", myArray[i]);
    }
}