#include <stdio.h>

int main()
{
    int a;
    printf("Enter number between 1 to 9\n");
    scanf("%d", &a);

    while (a < 10)
    // while (a > 10)
    // while(a>10){ ----> These two lines will lead to an infinite loop}

    {
        printf("%d\n", a);
        a++;
    }

    return 0;
}
  