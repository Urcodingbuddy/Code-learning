#include<stdio.h>
#include<conio.h>

int main(){
  int a;
  printf("Enter A\n");
  scanf("%d",&a);
//   one liner

  (a<5)? printf("A is less than 5") 
  : printf("A is not less than 5");
 
     return 0;
}