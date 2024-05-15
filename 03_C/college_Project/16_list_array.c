#include<stdio.h>

int main()
{
    int a[10],i;
    printf("Enter any 10 array elements\n");
    for(i=0;i<10;i++)
    scanf("%d",&a[i]);
    printf("\nDisplay list\n");
    for(i=0;i<10;i++)
    printf("\n%d element is %d",i+1,a[i]);

    
    return 0;
}