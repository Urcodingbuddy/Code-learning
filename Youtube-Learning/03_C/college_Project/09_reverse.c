#include<stdio.h>
#include<conio.h>
 int main()
 { int a,b,c,d,t,n,rev,avg;
 printf("\nEnter any four digit numbers\n");
 scanf("%d",&n);
 t=n;
 a=t%10;
 t=t/10;
 b=t%10;
 t=t/10;
 c=t%10;
 t=t/10;
 d=t%10;
 rev=a*1000+b*100+c*10+d*1;
 printf("\n The reverse number of %d is %d",n,rev);
 return 0;
}
