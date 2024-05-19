#include <stdio.h>

int calculateSum(int a, int b, int* sum){
   (*sum) = a + b;
}

int main(){

   int sum;
   int a = 4;
   int b = 3;

   calculateSum(a, b, &sum);

   printf("\nO resultado do cálculo foi:\n");
   printf("%d\n\n", sum);

   return 0;
}