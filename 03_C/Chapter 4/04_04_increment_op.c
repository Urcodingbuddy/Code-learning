#include<stdio.h>

int main()
{
    int i = 5;
    printf("The Value After i++ is %d\n", i++);
    i++;// -----> Pahle increment then print
    ++i;// same for decrement oprators
 
    printf("The Value of i is %d\n",i);
    i+=10; // ---> Increment i by 1 10
    printf("The value of i %d\n", i);

    return 0;
}