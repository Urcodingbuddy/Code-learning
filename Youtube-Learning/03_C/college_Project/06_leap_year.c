#include <stdio.h>
#include <conio.h>


int main()
{
    int year;
    printf("Enter the year:  ");
    scanf("%d", &year);
    if (year % 4 == 0)
        printf("Yes %d Is Leap A Year", year);
    else
        printf("No %d Is Not A Leap Year", year);
    return 0;
}

