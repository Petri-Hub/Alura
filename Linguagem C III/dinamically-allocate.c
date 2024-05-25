#include <stdio.h>
#include <stdlib.h>

int main(){
   int rows = 5;
   int columns = 20;
   
   int** matrix = malloc(sizeof(int*) * rows);

   for(int i = 0; i < rows; i++){
      matrix[i] = malloc(sizeof(int) * columns);
   }

   for(int i = 0; i < rows; i++){
      printf("%d\n", &matrix[i]);
   }

   for(int i = 0; i < rows; i++){
      free(matrix[i]);
   }

   free(matrix);


   return 0;
}