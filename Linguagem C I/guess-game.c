#include <stdio.h>

int main()
{
   // Comentário Tesste
   printf("*****************************************\n");
   printf("* Bem vindo ao nosso jogo de advinhacao *\n");
   printf("*****************************************\n");

   int secretNumber = 123;
   int guess;
   int tries = 3;

   while (tries > 0)
   {

      printf("Chute um número:\n");
      scanf("%d", &guess);
      printf("Seu chute foi: %d\n", guess);

      int guessed = guess == secretNumber;

      if (guessed)
      {
         printf("Você acertou!");
         break;
      }

      tries = tries - 1;

      int isSmaller = guess < secretNumber;
      int isBigger = guess > secretNumber;

      if (isSmaller)
      {
         printf("Você errou!\n");
         printf("O número secreto era maior!\n");
      }
      else
      {

         printf("Você errou!\n");
         printf("O número secreto era menor!\n");
      }
   }

   return 0;
}