#include <stdio.h>
#include <stdlib.h>

int main()
{
   // Comentário Tesste
   printf("*****************************************\n");
   printf("* Bem vindo ao nosso jogo de advinhacao *\n");
   printf("*****************************************\n");

   srand(time(0));

   int secretNumber = rand() % 100;
   int guessed = 0;
   int guess;
   int tries = 0;
   double points = 1000;

   printf("%d", secretNumber);

   while (1)
   {

      printf("Chute um número:\n");
      scanf("%d", &guess);
      printf("Seu chute foi: %d\n", guess);

      if (guess < 0)
      {
         printf("Números negativos não são válidos\n");
         continue;
      }

      guessed = guess == secretNumber;
      tries++;
      points -= abs((guess - secretNumber) / (double)2);

      if (guessed)
      {
         printf("Você acertou na %d tentativa!\n\n", tries);
         printf("Pontos: %d\n", points);
         break;
      }

      int isSmaller = guess < secretNumber;

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

      printf("Pontos: %.1f\n", points);
   }

   return 0;
}