#include <stdio.h>

int main()
{
    int n;
    printf("Enter any number: ");
    scanf("%d", &n);
    if (n % 2 == 0)
        printf("%d Is An Even Number", n);
    else
        printf("%d Is An Odd Number", n);
    return 0;
}