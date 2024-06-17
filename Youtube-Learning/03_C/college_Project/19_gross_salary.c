#include <stdio.h>
#include <conio.h>

int main()
{
    float bs, ha, da, ta, gs;
    printf("Enter the basic salary\n");
    scanf("%f", &bs);
    ha = (bs * 5) / 100;
    da = (bs * 10) / 100;
    ta = (bs * 15) / 100;
    gs = bs + ha + da + ta;
    printf("The gross salary is %2f",gs);
    return 0;
}

