#include<stdio.h>
#include<conio.h>
int main()
{
    int num, i, tab;
    printf("Enter the number: ");
    scanf("%d", &num);
    printf("\nTable of %d is:\n", num);
    for(i=1; i<=10; i++)
    {
        tab = num*i;
        printf("%d * %2d = %2d\n", num, i, tab);
    }
    getch();
    return 0;
}


// Wap for tables of two numbers


/*#include<stdio.h>
#include<conio.h>

    int main()
{
    int i,t,j,a,b;
    printf("\nEnter any two number's\n");
    scanf("%d%d",&a,&b);
    for(i=a;i<=b;i++)
    {
        for(j=1;j<=10;j++)
        {
            t = i*j;
            printf("%d\t",i*j);
        }
        printf("\n");
    }
    return 0;
}
*/