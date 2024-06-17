#include<stdio.h>

int main()
{
    float celsius, fahrenheit;
    printf("Enter Temperature value (in Celsius):  ");
    scanf("%f",&celsius);
    fahrenheit = (celsius*1.8)+32;
    printf("\n Equivalent Temprature Value (in Fahrenheit) = %0.2f", fahrenheit);
    return 0;
}