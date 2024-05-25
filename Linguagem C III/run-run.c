#include <stdio.h>
#include <stdlib.h>
#include "run-run.h"

Map map;

void freeMapMemory(){
   for(int i = 0; i < map.rows; i++){
      free(map.matrix[i]);
   }

   free(map.matrix); 
}

void allocMapMemory(){
   map.matrix = malloc(sizeof(char*) * map.rows);

   for(int i = 0; i < map.rows; i++){
      map.matrix[i] = malloc(sizeof(char) * (map.rows + 1));
   }
}

void scanMap(){
   FILE* mapFile = fopen("map.txt", "r");
   
   if(mapFile == 0){
      printf("Erro na leitura do mapa");
      exit(1);
   }

   fscanf(mapFile, "%d %d", &(map.rows), &(map.columns));

   printf("Linhas %d\n", map.rows);
   printf("Colunas %d\n\n", map.columns);

   allocMapMemory();

   for(int i = 0; i < 5; i++){
      fscanf(mapFile, "%s", map.matrix[i]);
   }

   fclose(mapFile);
}

void printGameMap(){
   printf("\e[1;1H\e[2J");
   
   for(int i = 0; i < map.rows; i++){
      printf("%s\n", map.matrix[i]);
   }

}

int acabou(){
   return 0;
}

void move(char direction){
   int x;
   int y;

   for(int i = 0; i < map.rows; i++){
      for(int j = 0; j < map.columns; j++){
         if(map.matrix[i][j] == '@'){
            y = i;
            x = j;
            break;
         }
      }
   }

   switch(direction){
      case 'a':
         map.matrix[y][x - 1] = '@';
         break;
      case 'd':
         map.matrix[y][x + 1] = '@';
         break;
      case 'w':
         map.matrix[y - 1][x] = '@';
         break;
      case 's':
         map.matrix[y + 1][x] = '@';
         break;
   }

   map.matrix[y][x] = '.';
}

int main(){

   scanMap();

   do{

      printGameMap();

      char command;
      scanf(" %c", &command);

      move(command);


   } while(!acabou());

   freeMapMemory();



   return 0;
}