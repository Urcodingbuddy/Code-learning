#include<stdio.h>
#include<conio.h>
    int main()
    {
    int n,t,a,b,c,arm;
    printf("\nEnter any three digit number\n");
    scanf("%d",&n);
    t=n;
    a=t%10;
    t=t/10;
    b=t%10;
    t=t/10;
    c=t%10;
    arm=a*a*a+b*b*b+c*c*c;
    if(n==arm)
    printf("\n%d is armstrong number",n);
    else
    printf("\n%d is not armstrong number",n);
    return 0;
}
