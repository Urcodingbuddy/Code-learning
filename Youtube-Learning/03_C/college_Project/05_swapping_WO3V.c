#include <stdio.h>

int main()
{
    int a, b;
    printf("Enter any two number:");
    scanf("%d%d", &a, &b);
    printf("Before swapping \na=%d\nb=%d\n", a, b);
    a = a + b;
    b = a - b;
    a = a - b;
    printf("After swapping \na=%d\nb=%d", a, b);
    return 0;
}