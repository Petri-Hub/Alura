#include <stdio.h>
#include <math.h>

int calculateExponetiation(int radical, int exponent){
   return pow((double)radical, (double)exponent);
}

int main(){

   int radical;
   int exponent;

   printf("Escolha um número para ser o radical:\n");
   scanf("%d", &radical);
   printf("\n");
   printf("Escolha um número para ser o exponente:\n");
   scanf("%d", &exponent);
   printf("\n");
   printf("O resultado foi:\n");
   printf("%d", calculateExponetiation(radical, exponent));

   return 0;
}