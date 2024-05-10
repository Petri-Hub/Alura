#include <stdio.h>

int main(){

   unsigned short int x;
   unsigned short int y;

   printf("Digite o primeiro número:\n");
   scanf("%d", &x);
   printf("Digite o segundo número:\n");
   scanf("%d", &y);
   printf("O resulto final foi: %d", x * y);

   return 0;
}