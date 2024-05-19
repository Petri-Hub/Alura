#include <stdio.h>


void calculateExponentiation(int a, int b, int* result){
   for(int i = 0; i < b; i++){
      (*result) *= a;
   }
}

int main(){

   int result = 1;

   calculateExponentiation(2, 3, &result);

   printf("\n\nO resultado da exponenciação foi:\n");
   printf("%d\n\n", result);

   return 0;
}