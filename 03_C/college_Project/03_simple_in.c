#include<stdio.h>

int main()
{
    float P,R,T;

    printf("Enter the value of Principle intrest: \n");
    scanf("%f",&P);
    
    printf("Enter the value of Time: \n");
    scanf("%f",&T);

    printf("Enter the value of Rate: \n");
    scanf("%f",&R);


    float SI = (P*T*R)/100;

    printf("Simple Interst = %f\n",SI);

    return 0;
}