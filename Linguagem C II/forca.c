#include <stdio.h>
#include <string.h>
#include <time.h>
#include <stdlib.h>
#include "forca.h"

char secretWord[WORD_LENGTH];
char guesses[26];
int triesQuantity = 0;

void showWelcomeMessage()
{
   printf("*******************\n");
   printf("*  Jogo da Forca  *\n");
   printf("*******************\n\n");
}

void takeGuess()
{
   char guess;

   printf("Chute uma letra:\n\n");
   scanf(" %c", &guess);
   printf("\n");

   guesses[triesQuantity] = guess;
   triesQuantity++;
}

int wasLetterGuessed(char letter)
{
   int wasGuessed = 0;

   for (int j = 0; j < triesQuantity; j++)
   {
      if (guesses[j] == letter)
      {
         wasGuessed = 1;
         break;
      }
   }

   return wasGuessed;
}

void drawLetterSpaces()
{
   for (int i = 0; i < strlen(secretWord); i++)
   {
      int wasGuessed = wasLetterGuessed(secretWord[i]);

      if (wasGuessed)
      {
         printf("%c ", secretWord[i]);
      }
      else
      {
         printf("_ ");
      }
   }

   printf("\n\n");
}

void chooseWord()
{
   FILE* file = fopen("words.txt", "r");
   
   int wordsQuantity;
   int randomLine;

   fscanf(file, "%d", &wordsQuantity);
   srand(time(0));

   if(file == 0){
      printf("O arquivo falhou em ser aberto.");
      exit(1);
   }

   randomLine = rand() % wordsQuantity;

   for(int i = 0; i < randomLine; i++){
      fscanf(file, "%s", secretWord);
   }

   fclose(file);
}

int didStrangle(){
   int wrongGuesses = 0;

   for(int i = 0; i < triesQuantity; i++){
      char guessedLetter = guesses[i];
      int isRightGuess = 0;

      for(int j = 0; j < strlen(secretWord); j++){
         if(secretWord[j] == guessedLetter){
            isRightGuess = 1;
         }
      }

      if(!isRightGuess){
         wrongGuesses++;
      }
   }

   return wrongGuesses > 5;
}

int didWin(){
   for(int i = 0; i < strlen(secretWord); i++){
      if(!wasLetterGuessed(secretWord[i])){
         return 0;
      }
   }
   return 1;
}

void promptNewWordAddition(){
   char wantsToAdd;

   printf("Você quer adicionar uma nova palavra? (S/N):\n");
   scanf(" %c", &wantsToAdd);

   if(wantsToAdd == 'S'){
      char newWord[20];
      int curWordQuantity;

      printf("Digite a nova palavra para ser adicionada:\n");
      scanf("%s", newWord);

      FILE* file;

      file = fopen("words.txt", "r+");

      if(file == 0){
         printf("Desculpe, não foi possível adicionar sua palavra.");
         return;
      }

      fscanf(file, "%d", &curWordQuantity);

      curWordQuantity++;

      fseek(file, 0, SEEK_SET);
      fprintf(file, "%d", curWordQuantity);

      fseek(file, 0, SEEK_END);
      fprintf(file, "\n%s", newWord);
      fclose(file);
   }
}

int main()
{
   showWelcomeMessage();
   chooseWord(secretWord);

   do
   {

      drawLetterSpaces(secretWord, guesses, triesQuantity);
      takeGuess(guesses, &triesQuantity);

   } while (!didWin() && !didStrangle());

   if(didWin()){
      printf("Você ganhou!\n");
   } else {
      printf("Você perdeu! A palavra era: %s\n", secretWord);
   }

   return 0;
}