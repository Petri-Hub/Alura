#include <stdio.h>

int sumNumbersFromArray(int numbers[10]){
   int total = 0; 

   for(int i = 0; i < 10; i++){
      total += numbers[i];
   }

   return total;
}

int main(){

   int numbers[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
   int total = sumNumbersFromArray(numbers);
   
   printf("\nA soma de todos os items do array resultou em:\n");
   printf("%d\n\n", total);

   return 0;
}