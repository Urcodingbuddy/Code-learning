#include<stdio.h>

int main()
{
    
    int i = 0;
    do{
        printf("The value of i is %d\n", i);
        if(i==5){
            break;
        }
        i++;
    }while(i<10);
    return 0;
}


/*  wap for user input */
/*#include<stdio.h>

int main()
{
    int i = 0,n;
    printf("Enter the value of n");
    scanf("%d",&n);
    do{
        printf("The value of i is %d\n", i);
        if(i==n){
            break;
        }
        i++;
    }while(i<10);
    return 0;
}*/   