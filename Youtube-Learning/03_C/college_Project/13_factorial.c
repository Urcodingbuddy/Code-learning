#include<stdio.h>
#include<conio.h>

    int main()
{
    int i,n,f=1;
    printf("\nEnter any Number\n");
    scanf("%d",&n);
    for(i=n;i>=1;i--)
    { 
        f = f*i;

    }
    printf("\nFactorial is %d",f);
    return 0;
}